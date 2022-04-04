import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //post
  createUser(user: User){
    return this.http.post<User>(this.baseURL, user);
  }

  constructor(public http: HttpClient, @Inject("baseUrl") public baseURL: string) {
    this.baseURL += "login/"
   }
}
