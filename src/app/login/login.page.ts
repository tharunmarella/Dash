import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from "@angular/forms";
import {LoginService} from "./login.service";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  token:string='';
  loginData:any=[];

  constructor(private logService:LoginService,private router: Router,private storage: Storage) { 
    this.storage.get('token').then((val) => {
      this.token=val;
    });
  }

  submitForm() {
    this.logService.postRequest(this.ionicForm.controls.user.value,this.ionicForm.controls.pass.value).subscribe(
      res => {
        this.loginData=res;
        this.storage.set('token',this.loginData.token);
        this.storage.set('name',this.loginData.user.firstName);
        this.storage.set('role',this.loginData.user.case.role._id);
      },
      err => {
        console.log("Error occured");
      }
    );;
    console.log(this.token);
    if(this.token)
    {
      this.router.navigate(['/tabs']);
    }


  }

  ngOnInit() {
    this.ionicForm  = new FormGroup({          
      'user':new FormControl(null),
      'pass':new FormControl(null)

 })
  }

}
