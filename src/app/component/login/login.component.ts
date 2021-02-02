import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { ShadiService } from 'src/app/shared/shadi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName!: string;
  password!: string;

  constructor(private log: ShadiService, private cs: CommonService, private router: Router ) { }

  login() {
    this.log.login(this.userName, this.password).subscribe(t => {
      localStorage.setItem('token', t.access_token);
      this.cs.isLoggedIn$.next(true);
      this.router.navigate(['/']);
    })
  }
 

}
