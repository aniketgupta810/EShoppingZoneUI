import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { Router } from '@angular/router';
@Component({
 
  selector: 'app-navbar',
   templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public nav: NavbarServiceService,public router:Router) { }

  ngOnInit(): void {
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}