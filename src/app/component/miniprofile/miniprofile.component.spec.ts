import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniprofileComponent } from './miniprofile.component';

describe('MiniprofileComponent', () => {
  let component: MiniprofileComponent;
  let fixture: ComponentFixture<MiniprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
