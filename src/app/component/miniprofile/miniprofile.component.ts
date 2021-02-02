import { Component, Input, OnInit } from '@angular/core';
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
}
