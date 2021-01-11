import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData: any = [];

  localStorage: Storage;
  constructor(private http: HttpClient,private storage: Storage) { 
  }
  id:string;
  

  postRequest(user,pass){
    
    const headers = { 'Content-Type': 'application/json'};
    const body = { "email": user,"password": pass };

   return this.http.post('http://54.164.171.220:8080/api/v1/login',{"email": user,"password":pass})

        
     
  }
}
