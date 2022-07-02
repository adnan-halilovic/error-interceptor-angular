import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get401() {
    return this.http.get('http://httpstat.us/401');
  }
  get403() {
    return this.http.get('http://httpstat.us/403');
  }
  get404() {
    return this.http.get('http://httpstat.us/404');
  }
  get503() {
    return this.http.get('http://httpstat.us/503');
  }
}
