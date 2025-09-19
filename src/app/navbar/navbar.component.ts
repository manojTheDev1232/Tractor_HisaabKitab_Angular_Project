import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    logout() {
    // Remove token or any user data
    localStorage.removeItem('authToken'); // or sessionStorage.clear()
    // Redirect to login
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

}
