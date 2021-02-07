import { Component, OnInit } from '@angular/core';
import { MyProfile } from '../../models/myProfile';
import { ShadiService } from '../../shared/shadi.service';

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
  }
}
