import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class Tab2Service {
  token:string='';

  constructor(private http: HttpClient,private storage: Storage) { 
    this.storage.get('token').then((val) => {
      this.token=val;
    });
  }

  getRequest(){
    
    const headers = { 'Authorization': this.token};

    return this.http.get('http://54.164.171.220:8080/api/intake/v1/inquiry?sort={"createdAt" : -1}')
      
  }

}
