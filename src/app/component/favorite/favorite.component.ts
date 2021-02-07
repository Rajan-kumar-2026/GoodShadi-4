import { Component, OnInit } from '@angular/core';
import { ShadiService } from '../../shared/shadi.service';
import { MyProfile } from '../../models/myProfile';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  profiles!: MyProfile[];

  constructor(private ss: ShadiService) { }

  ngOnInit(): void {
    this.ss.getAllFavourites().subscribe(profiles => this.profiles = profiles);
  }
}
