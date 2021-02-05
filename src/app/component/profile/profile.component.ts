import { Component, OnInit } from '@angular/core';
import { MyProfile } from '../../models/myProfile';
import { ShadiService } from 'src/app/shared/shadi.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UtilService } from '../../shared/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile!: MyProfile | null;

  constructor(private ss: ShadiService,
    private ar: ActivatedRoute, 
    public us: UtilService) {
  }

  ngOnInit(): void {
    this.ar.paramMap.pipe(
      switchMap(pm => {
        const email = pm.get('email');
        return !!email ? this.ss.getByEmail(email) : of(null);
      })
    ).subscribe(p => this.profile = p);
  }
}
