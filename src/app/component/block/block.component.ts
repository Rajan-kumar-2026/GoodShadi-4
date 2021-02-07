import { Component, OnInit } from '@angular/core';
import { MyProfile } from '../../models/myProfile';
import { ShadiService } from '../../shared/shadi.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  profiles!: MyProfile[];

  constructor(private ss: ShadiService) { }

  ngOnInit(): void {
    this.ss.getAllBlocked().subscribe(p => this.profiles = p);
  }  
}
