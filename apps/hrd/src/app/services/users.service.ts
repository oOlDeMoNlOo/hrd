import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/user');
  }

  changeLvl(level: number, id: any) {
    return this.http.patch('/user/privilege', { level, id });
  }
}
