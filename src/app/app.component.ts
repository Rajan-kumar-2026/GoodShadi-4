import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn!: boolean;

  constructor(public cs: CommonService, private router: Router) {
    this.cs.isLoggedIn$.subscribe(v => this.isLoggedIn = v);
  }

  logOut() {
    localStorage.clear();
    this.cs.isLoggedIn$.next(false);
    this.cs.loggedInUser$.next(null);

    this.cs.showSnackBar("Logout successful");

    this.router.navigate(['']);
  }
}
