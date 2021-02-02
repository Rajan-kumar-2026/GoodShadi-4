import { Component } from '@angular/core';
import { ShadiService } from 'src/app/shared/shadi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private reg: ShadiService) { }

  register() {
    this.reg.createRegister(this.email, this.password, this.confirmPassword).subscribe(r => {
      alert('Rgistration Successful');
    },
      e => alert(e.message));
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

}
