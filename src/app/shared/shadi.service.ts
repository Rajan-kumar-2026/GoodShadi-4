import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICountry } from '../Models/country';
import { IEducation } from '../Models/education';
import { IEmployment } from '../Models/employment';
import { IMaritalstatus as IMaritalStatus } from '../Models/maritalstatus';
import { IGender } from '../Models/gender';
import { MyProfile } from '../Models/myProfile';

@Injectable({
  providedIn: 'root'
})
export class ShadiService {

  constructor(private hc: HttpClient) { }

  getAllCountry(): Observable<ICountry[]> {
    return this.hc.get<ICountry[]>('http://localhost:44371/api/country');
  }

  getAllEducation(): Observable<IEducation[]> {
    return this.hc.get<IEducation[]>('http://localhost:44371/api/education');
  }

  getAllEmploymentType(): Observable<IEmployment[]> {
    return this.hc.get<IEmployment[]>('http://localhost:44371/api/employ');
  }

  getAllMaritalStatus(): Observable<IMaritalStatus[]> {
    return this.hc.get<IMaritalStatus[]>('http://localhost:44371/api/maritalstatus');
  }

  getAllGender(): Observable<IGender[]> {
    return this.hc.get<IGender[]>('http://localhost:44371/api/gender');
  }

  createMyProfile(p: MyProfile): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    };

    return this.hc.post('http://localhost:44371/api/profile/create', p, httpOptions);
  }

  createRegister(email: string, password: string, confirmPassword: string): Observable<any> {
    return this.hc.post('http://localhost:44371/api/Account/Register', { email: email, password: password, confirmPassword: confirmPassword });
  }

  search(): Observable<MyProfile[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    };

    return this.hc.get<MyProfile[]>('http://localhost:44371/api/search/profiles', httpOptions);
  }

  login(userName: string, password: string): Observable<any> {
    const params = {
      grant_type: 'password',
      userName: userName,
      password: password
    };
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded'
    });
    const options = { headers: headers };
    const body: string = this.encodeParams(params);
    return this.hc.post('http://localhost:44371/token', body, options);
  }

  private encodeParams(params: any): string {
    let body = '';
    for (const key in params) {
      if (body.length) {
        body += '&';
      }
      body += key + '=';
      body += encodeURIComponent(params[key]);
    }
    return body;
  }
}
