import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoggedIn$!: BehaviorSubject<boolean>;

  constructor() {
    const hastoken = !!localStorage.getItem('token');
    this.isLoggedIn$ = new BehaviorSubject(hastoken);
  }
}
