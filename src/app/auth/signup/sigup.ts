import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.html'
})

export class SignupComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  signupForm!: FormGroup;

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.auth.signup(this.signupForm.value).subscribe({
        next: () => alert('Signup successful! Please login.'),
        error: err => alert(err.error.message || 'Signup failed')
      });
    }
  }
}
