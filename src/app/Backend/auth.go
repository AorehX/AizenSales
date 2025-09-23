package main

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

// 🔑 Secret key (move to env var in production)
var jwtSecret = []byte("supersecretkey")

// User model (in-memory for now; later replace with DB)
type User struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

var users = make(map[string]string) // email -> hashed password

// Generate JWT token
func generateToken(email string) (string, error) {
	claims := jwt.MapClaims{
		"email": email,
		"exp":   time.Now().Add(time.Hour * 72).Unix(), // 3 days expiry
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtSecret)
}

func main() {
	router := gin.Default()

	auth := router.Group("/api/auth")
	{
		auth.POST("/signup", signupHandler)
		auth.POST("/login", loginHandler)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	log.Printf("Server running on port %s", port)
	router.Run(":" + port)
}

user := router.Group("/api/user")

user.Use(AuthMiddleware()) // 🔒 Protect all /api/user routes
{
	user.GET("/profile", profileHandler)
}

// ----------------- Handlers -----------------

// POST /api/auth/signup
func signupHandler(c *gin.Context) {
	var req User
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Check if already registered
	if _, exists := users[req.Email]; exists {
		c.JSON(http.StatusConflict, gin.H{"error": "User already exists"})
		return
	}

	// Hash password
	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error processing password"})
		return
	}

	users[req.Email] = string(hashed)
	c.JSON(http.StatusCreated, gin.H{"message": "User registered successfully"})
}

// POST /api/auth/login
func loginHandler(c *gin.Context) {
	var req User
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Validate user
	stored, exists := users[req.Email]
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	// Check password
	if err := bcrypt.CompareHashAndPassword([]byte(stored), []byte(req.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	// Generate JWT
	token, err := generateToken(req.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}
