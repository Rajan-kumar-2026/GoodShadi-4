import { Component } from '@angular/core';
import { ICountry } from 'src/app/Models/country';
import { IEducation } from 'src/app/Models/education';
import { IEmployment } from 'src/app/Models/employment';
import { IGender } from 'src/app/Models/gender';
import { IMaritalstatus } from 'src/app/Models/maritalstatus';
import { MyProfile } from 'src/app/Models/myProfile';
import { ShadiService } from 'src/app/shared/shadi.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {

  myprofile: MyProfile = new MyProfile('y');
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


  constructor(private mp: ShadiService) {
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
  }

  getAllCountry() {
    this.mp.getAllCountry().subscribe(c => this.country = c);
  }

  getallEducation() {
    this.mp.getAllEducation().subscribe(e => this.education = e);
  }

  getAllMaritalStatus() {
    this.mp.getAllMaritalStatus().subscribe(m => this.maritalstatus = m);
  }

  getAllEmployment() {
    this.mp.getAllEmploymentType().subscribe(emp => this.employment = emp);
  }

  getAllGender() {
    this.mp.getAllGender().subscribe(g => this.gender = g);
  }

  submit() {
    if (this.myprofile.firstName == undefined || this.myprofile.firstName == '') {
      alert('Type your first name');
      return;
    }
    else if (this.myprofile.lastName == undefined || this.selectedYear == '') {
      alert('Type your last name');
      return;
    }
    else if (this.myprofile.mobileNumber == undefined) {
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
    else if (this.myprofile.genderId == undefined) {
      alert('Seelct your gender');
      return;
    }
    else if (this.myprofile.educationId == undefined) {
      alert('Select your education');
      return;
    }
    else if (this.myprofile.maritalstatusId == undefined) {
      alert('Select your marital status');
      return;
    }
    else if (this.myprofile.employmentTypeId == undefined) {
      alert('Select your employment');
      return;
    }
    else if (this.myprofile.jobTitle == undefined) {
      alert('type your job profile');
      return;
    }
    else if (this.myprofile.countryId == undefined) {
      alert('Select your country');
      return;
    }
    else if (this.myprofile.mobileNumVisibility == undefined) {
      alert('Select your Mobile Visibility');
      return;
    }
    this.myprofile.dateOfBirth = `${this.selectedDay} ${this.selectedMonth} ${this.selectedYear}`;

    this.mp.createMyProfile(this.myprofile).subscribe(m => {
      alert('Successful Save');
      this.resetScreen();
    },
      m => alert('Error Saving Profile'));
  }

  resetScreen() {
    this.selectedDay = '';
    this.selectedMonth = '';
    this.selectedYear = '';
    this.myprofile = new MyProfile('y');

  }
}
