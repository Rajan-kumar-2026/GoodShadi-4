import { Component, OnInit } from '@angular/core';
import { MyProfile } from '../../models/myProfile';
import { ShadiService } from 'src/app/shared/shadi.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { UtilService } from '../../shared/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile!: MyProfile | null;
  isFavourite!: boolean | null;
  isBlocked!: boolean | null;

  constructor(private ss: ShadiService,
    private ar: ActivatedRoute,
    public us: UtilService) {
  }

  ngOnInit(): void {
    const ob$ = this.ar.paramMap.pipe(
      switchMap(pm => {
        const email = pm.get('email');
        return !!email ? this.ss.getByEmail(email) : of(null);
      }),
      tap(p => this.profile = p),
      switchMap(p => {
        if (!!p?.id) {
          return forkJoin([
            this.ss.isFavourite(p.id),
            this.ss.isBlocked(p.id)
          ])
        }

        return of([null, null]);
      })
    );
    
    ob$.subscribe(([isF, isB]) => {
      this.isFavourite = isF;
      this.isBlocked = isB;
    });
  }

  makeFavourite() {
    if (!!this.profile?.id) {
      this.ss.makeFavourite(this.profile.id).subscribe(n => this.isFavourite = true)
    }
  }

  removeFavourite() {
    if (!!this.profile?.id) {
      this.ss.removeFavourite(this.profile.id).subscribe(n => this.isFavourite = false)
    }
  }

  block() {
    if (!!this.profile?.id) {
      this.ss.block(this.profile.id).subscribe(n => this.isBlocked = true)
    }
  }

  unblock() {
    if (!!this.profile?.id) {
      this.ss.unblock(this.profile.id).subscribe(n => this.isBlocked = false)
    }
  }
}
