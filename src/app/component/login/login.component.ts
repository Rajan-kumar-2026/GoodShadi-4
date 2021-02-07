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

  constructor(private ss: ShadiService, private cs: CommonService, private router: Router) { }

  login() {
    this.ss.login(this.userName, this.password).subscribe(t => {
      console.log(JSON.stringify(t));
      localStorage.setItem('token', t.access_token);
      this.cs.isLoggedIn$.next(true);

      localStorage.setItem('loggedInUser', t.userName);
      this.cs.loggedInUser$.next(t.userName);
      
      this.getLookupData();

      this.router.navigate(['/']);
    }, e => alert(e.error.error_description))
  }

  getLookupData() {
    this.ss.getAllEducation().subscribe(e => localStorage.setItem('educations', JSON.stringify(e)));
    this.ss.getAllCountry().subscribe(c => localStorage.setItem('countryes', JSON.stringify(c)));
    this.ss.getAllEmploymentType().subscribe(emp => localStorage.setItem('employments', JSON.stringify(emp)));
    this.ss.getAllGender().subscribe(gen => localStorage.setItem('genders', JSON.stringify(gen)));
    this.ss.getAllMaritalStatus().subscribe(m => localStorage.setItem('maritals', JSON.stringify(m)));
  }
}
