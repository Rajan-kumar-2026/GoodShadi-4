import { Component, OnInit } from '@angular/core';
import { MyProfile } from '../../models/myProfile';
import { ICountry } from '../../models/country';
import { IEducation } from '../../models/education';
import { IEmployment } from '../../models/employment';
import { IGender } from '../../models/gender';
import { IMaritalstatus } from '../../models/maritalstatus';
import { ShadiService } from '../../shared/shadi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  profile: MyProfile = new MyProfile('y');
  country!: ICountry[];
  education!: IEducation[];
  maritalstatus!: IMaritalstatus[];
  employment!: IEmployment[];
  gender!: IGender[];
  days: number[] = [];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'Jualy', 'August', 'September', 'Novemner', 'December'];
  years: number[] = [];
  selectedDay!: string;
  selectedMonth!: string;
  selectedYear!: string;

  constructor(private ss: ShadiService) {
  }
  
  ngOnInit() {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
    for (let i = 2020; i >= 1900; i--)
      this.years.push(i);
    this.getAllGender();
    this.getAllMaritalStatus();
    this.getallEducation();
    this.getAllEmployment();
    this.getAllCountry();
    this.getprofile();
  }

  getprofile() {
    this.ss.getMyProfile().subscribe(p => {
      if (!!p) {
        this.profile = p;
        
        const dob = p.dateOfBirth; //"1 January 2020"
        const arrDob = dob.split(" ");
        this.selectedDay = arrDob[0];
        this.selectedMonth = arrDob[1];
        this.selectedYear = arrDob[2];
      }
    });
  }

  getAllCountry() {
    this.ss.getAllCountry().subscribe(c => this.country = c);
  }

  getallEducation() {
    this.ss.getAllEducation().subscribe(e => this.education = e);
  }

  getAllMaritalStatus() {
    this.ss.getAllMaritalStatus().subscribe(m => this.maritalstatus = m);
  }

  getAllEmployment() {
    const employments = localStorage.getItem('employments');
  
    this.employment = !!employments ? JSON.parse(employments) : [];
  }

  getAllGender() {
    const genders = localStorage.getItem('genders');
  
    this.gender = !!genders ? JSON.parse(genders) : [];
  }

  submit() {
    if (this.profile.firstName == undefined || this.profile.firstName == '') {
      alert('Type your first name');
      return;
    }
    else if (this.profile.lastName == undefined || this.selectedYear == '') {
      alert('Type your last name');
      return;
    }
    else if (this.profile.mobileNumber == undefined) {
      alert('Type your mobile number');
      return;
    }
    else if (this.selectedDay == undefined || this.selectedDay == '') {
      alert('Select your day');
      return;
    }
    else if (this.selectedMonth == undefined || this.selectedMonth == '') {
      alert('Select your month');
      return;
    }
    else if (this.selectedYear == undefined || this.selectedYear == '') {
      alert('Select your year');
      return;
    }
    else if (this.profile.genderId == undefined) {
      alert('Seelct your gender');
      return;
    }
    else if (this.profile.educationId == undefined) {
      alert('Select your education');
      return;
    }
    else if (this.profile.maritalstatusId == undefined) {
      alert('Select your marital status');
      return;
    }
    else if (this.profile.employmentTypeId == undefined) {
      alert('Select your employment');
      return;
    }
    else if (this.profile.jobTitle == undefined) {
      alert('type your job profile');
      return;
    }
    else if (this.profile.countryId == undefined) {
      alert('Select your country');
      return;
    }
    else if (this.profile.mobileNumVisibility == undefined) {
      alert('Select your Mobile Visibility');
      return;
    }
    this.profile.dateOfBirth = `${this.selectedDay} ${this.selectedMonth} ${this.selectedYear}`;

    this.ss.createMyProfile(this.profile).subscribe(m => {
      alert('Successful Save');
      // this.resetScreen();
    },
      m => alert('Error Saving Profile'));
  }

  resetScreen() {
    this.selectedDay = '';
    this.selectedMonth = '';
    this.selectedYear = '';
    this.profile = new MyProfile('y');

  }
}
