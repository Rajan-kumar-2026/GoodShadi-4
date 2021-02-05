import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '../../shared/util.service';
import { MyProfile } from '../../models/myProfile';

@Component({
  selector: 'app-miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.css']
})
export class MiniprofileComponent implements OnInit {

  @Input() profile!: MyProfile;

  constructor(public us: UtilService) { }

  ngOnInit(): void {
  }
}
