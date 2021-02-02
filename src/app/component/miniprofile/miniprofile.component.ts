import { Component, Input, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { ICountry } from 'src/app/Models/country';
import { IEducation } from 'src/app/Models/education';
import { IEmployment } from 'src/app/Models/employment';
import { IGender } from 'src/app/Models/gender';
import { IMaritalstatus } from 'src/app/Models/maritalstatus';
import { MyProfile } from 'src/app/Models/myProfile';

@Component({
  selector: 'app-miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.css']
})
export class MiniprofileComponent implements OnInit {

  @Input() profile!: MyProfile;
  
  constructor() { }

  ngOnInit(): void {
  }

  getEducationText(id: number): string | undefined {
    const strEducations = localStorage.getItem('educations');

    if (!!strEducations) {
      const educations = JSON.parse(strEducations) as IEducation[];
      
      const education = educations.find(e => e.id === id);

      return education?.name;
    }

    return undefined;
  }

  getCountryText(id: number): string | undefined {
    const keepCountryes = localStorage.getItem('countryes');

    if (!!keepCountryes) {
      const countryes = JSON.parse(keepCountryes) as ICountry[];

      const country = countryes.find(c => c.id === id);

      return country?.name;
    }

    return undefined;
  }

  getEmploymentText(id: number): string | undefined {
    const storeEmployments = localStorage.getItem('employments');

    if (!!storeEmployments) {
      const emps = JSON.parse(storeEmployments) as IEmployment[];

      const employment = emps.find(emp => emp.id === id);

      return employment?.name;
    }

    return undefined;
  }

  getGenderText(id: number): string | undefined {
    const storeGenders = localStorage.getItem('genders');

    if (!!storeGenders) {
      const genders = JSON.parse(storeGenders) as IGender[]; 

      const gender = genders.find(g => g.id === id);

      return gender?.name;
    }

    return undefined;
  }

  getMaritalStatusText(id: number): string | undefined {
    const storeMaritalStatus = localStorage.getItem('maritals');

    if (!!storeMaritalStatus) {
      const maritals = JSON.parse(storeMaritalStatus) as IMaritalstatus[];

      const marital = maritals.find(m => m.id === id);

      return marital?.name;
    }

    return undefined;
  }
}
