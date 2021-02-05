import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoggedIn$!: BehaviorSubject<boolean>;
  loggedInUser$!: BehaviorSubject<string | null>;

  constructor() {
    const hastoken = !!localStorage.getItem('token');
    this.isLoggedIn$ = new BehaviorSubject(hastoken);

    const loggedInUser = localStorage.getItem('loggedInUser');
    this.loggedInUser$ = new BehaviorSubject(loggedInUser);
  }
}
