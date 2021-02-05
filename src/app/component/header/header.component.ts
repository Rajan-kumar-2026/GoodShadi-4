import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn!: boolean;
  // loggedInUser!: string | null;

  constructor(public cs: CommonService, private router: Router) {
    this.cs.isLoggedIn$.subscribe(v => this.isLoggedIn = v);
    // this.cs.loggedInUser$.subscribe(u => this.loggedInUser = u);
  }

  logOut() {
    localStorage.clear();
    this.cs.isLoggedIn$.next(false);
    this.cs.loggedInUser$.next(null);
    
    this.router.navigate(['']);
  }
}
