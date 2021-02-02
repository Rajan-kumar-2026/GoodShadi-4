import { Component, OnInit } from '@angular/core';
import { MyProfile } from 'src/app/Models/myProfile';
import { ShadiService } from 'src/app/shared/shadi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profiles!: MyProfile[];
  
  constructor(private ss: ShadiService) { }

  ngOnInit(): void {
    this.ss.search().subscribe(profiles => this.profiles = profiles);

    this.ss.getAllEducation().subscribe(e => localStorage.setItem('educations', JSON.stringify(e)));    
    this.ss.getAllCountry().subscribe(c => localStorage.setItem('countryes', JSON.stringify(c)));
    this.ss.getAllEmploymentType().subscribe(emp => localStorage.setItem('employments', JSON.stringify(emp)));
    this.ss.getAllGender().subscribe(gen => localStorage.setItem('genders', JSON.stringify(gen)));
    this.ss.getAllMaritalStatus().subscribe(m => localStorage.setItem('maritals', JSON.stringify(m)));
  }
}
