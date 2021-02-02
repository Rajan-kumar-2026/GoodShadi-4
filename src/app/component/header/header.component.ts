import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn!: boolean;

  constructor(private cs: CommonService) {
    this.cs.isLoggedIn$.subscribe(v => this.isLoggedIn = v);
  }

  logOut() {
    localStorage.clear();
    this.cs.isLoggedIn$.next(false);
  }
}
