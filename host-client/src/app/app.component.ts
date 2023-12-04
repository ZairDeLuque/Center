import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'host-client';

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    if(!localStorage.getItem('loggedIn')){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['home']);
    }
  }
}
