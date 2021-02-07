import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICountry } from '../models/country';
import { IEducation } from '../models/education';
import { IEmployment } from '../models/employment';
import { IMaritalstatus as IMaritalStatus } from '../models/maritalstatus';
import { IGender } from '../models/gender';
import { MyProfile } from '../models/myProfile';

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

  getMyProfile(): Observable<MyProfile> {
    return this.hc.get<MyProfile>('http://localhost:44371/api/profile/getmyprofile', this.httpOptions());
  }

  getByEmail(email: string): Observable<MyProfile> {
    return this.hc.get<MyProfile>(`http://localhost:44371/api/profile/getByEmail?email=${email}`, this.httpOptions());
  }

  createMyProfile(p: MyProfile): Observable<any> {
    return this.hc.post('http://localhost:44371/api/profile/create', p, this.httpOptions());
  }

  createRegister(email: string, password: string, confirmPassword: string): Observable<any> {
    return this.hc.post('http://localhost:44371/api/Account/Register', { email: email, password: password, confirmPassword: confirmPassword });
  }

  search(): Observable<MyProfile[]> {
    return this.hc.get<MyProfile[]>('http://localhost:44371/api/search/profiles', this.httpOptions());
  }

  getAllFavourites(): Observable<MyProfile[]> {
    return this.hc.get<MyProfile[]>('http://localhost:44371/api/favourite/getall', this.httpOptions());
  }

  isFavourite(id: number): Observable<boolean> {
    return this.hc.get<boolean>(`http://localhost:44371/api/favourite/isFavourite?id=${id}`, this.httpOptions());
  }

  makeFavourite(id: number): Observable<number> {
    return this.hc.post<number>(`http://localhost:44371/api/favourite/make?favUserId=${id}`, {}, this.httpOptions());
  }

  removeFavourite(id: number): Observable<number> {
    return this.hc.delete<number>(`http://localhost:44371/api/favourite/remove?favUserId=${id}`, this.httpOptions());
  }

  isBlocked(id: number): Observable<boolean> {
    return this.hc.get<boolean>(`http://localhost:44371/api/blocked/isBlocked?id=${id}`, this.httpOptions());
  }

  block(id: number): Observable<number> {
    return this.hc.post<number>(`http://localhost:44371/api/blocked/block?userIdToBlock=${id}`, {}, this.httpOptions());
  }

  unblock(id: number): Observable<number> {
    return this.hc.delete<number>(`http://localhost:44371/api/blocked/unblock?userIdToUnblock=${id}`, this.httpOptions());
  }

  getAllBlocked(): Observable<MyProfile[]> {
    return this.hc.get<MyProfile[]>('http://localhost:44371/api/blocked/getall', this.httpOptions());
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

  private httpOptions(): {
    headers: HttpHeaders;
  } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    };
  }
}
