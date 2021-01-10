import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private storage: Storage) { }
  id:string;

  postRequest(user,pass){
    const headers = { 'Content-Type': 'application/json'};
    const body = { "email": user,"password": pass };
    

    this.http.post('http://54.164.171.220:8080/api/v1/login',{"email": "tharunmarella@mail.fresnostate.edu","password": "12345678"})
      .subscribe(
        res => {
          this.id=res.id;
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    





    // this.http.post<any>('http://54.164.171.220:8080/api/v1/login', body, { headers }).subscribe(data => {
    //     console.log(data);
    //     // this.storage.set("accessKey","hello");
    // });

  }
}
