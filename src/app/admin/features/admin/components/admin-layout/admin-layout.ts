import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss'
})
export class AdminLayout implements OnInit {
  isSidebarOpen = true;
  currentUseer = 'Admin User';

  menueItems = [
    {
      icons: '🏠',
      label : 'Dashboard',
      route : '/admin/dashboard',
      active : false,
    },

    {
      icons: '📊',
      label : 'properties',
      route : '/admin/properties',
      active : false,
      submenue : [
        {label: "All Properties", route: "/admin/properties"},
        {label: "Add Property", route: "/admin/properties/add"},
      ]
    },

    {
      icons: '👥',
      user : "Admin User",
      route : "/admin/users",
      active : false,
    },

    {
      icon: "📧",
      label : "Inquiries",
      route : "/admin/inquiries",
      active : false,
    },

    {
      icon: "📈",
      label : "Reports",
      route : "/admin/reports",
      active : false,
    },

    {
      icon: "⚙️",
      label : "Settings",
      route : "/admin/settings",
      active : false,
    }
  ]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveMenuItem();
  }

  toGGleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.setActiveMenuItem();
  }

  setActiveMenuItem(): void {
    const currentRoute = this.router.url;
    this.menueItems.forEach(item => {
      item.active = item.route === currentRoute;
      if (item.submenue) {
        item.submenue.forEach(sub => {
          if (sub.route === currentRoute) {
            item.active = true;
          }
        });
      }
    });
  }

  logOut(): void {
    // Implement logout logic here
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }

}
