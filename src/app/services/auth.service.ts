import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient) {}

  baseServerURL = "https://localhost:44336/api/";
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelperService = new JwtHelperService();

  registerUser(user:Array<String | null | undefined>)
  {
    return this.http.post(this.baseServerURL+"User/CreateUser", {
      FirstName: user[0],
      LastName: user[1],
      Email: user[2],
      Password: user[3]
    },{
      responseType:'text',
    });
  }

  loginUser(loginInfo: Array<string |null| undefined>){
    console.log("Inside loginAuth service");
    return this.http.post(this.baseServerURL+'User/LoginUser', {
      Email:loginInfo[0],
      Password:loginInfo[1]
    },
    {
      responseType:'text',
    });
   }

  isLoggedIn():boolean{
    return localStorage.getItem("access_token") ? true :false;
  };

  setToken(token:string){
    localStorage.setItem("access_token", token)
    this.loadCurrentUser(); 

  }

  loadCurrentUser(){

    const token  =localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;

    const data = userInfo ? {
      id:userInfo.id,
      firstname:userInfo.firstname,
      lastname:userInfo.lastname,
      email:userInfo.email
    } : null;

    this.currentUser.next(data);

  }
}
