import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoggedIn$!: BehaviorSubject<boolean>;
  loggedInUser$!: BehaviorSubject<string | null>;

  constructor(private sb: MatSnackBar) {
    const hastoken = !!localStorage.getItem('token');
    this.isLoggedIn$ = new BehaviorSubject(hastoken);

    const loggedInUser = localStorage.getItem('loggedInUser');
    this.loggedInUser$ = new BehaviorSubject(loggedInUser);
  }

  showSnackBar(msg: string){
    this.sb.open(msg, undefined, {
      duration: 2000
    });
  }
}
