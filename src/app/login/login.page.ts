import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from "@angular/forms";
import {LoginService} from "./login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;

  constructor(private logService:LoginService,private router: Router) { 
  }

  submitForm() {
    this.logService.postRequest(this.ionicForm.controls.user.value,this.ionicForm.controls.pass.value);
    this.router.navigate(['/tabs'])

  }

  ngOnInit() {
    this.ionicForm  = new FormGroup({          
      'user':new FormControl(null),
      'pass':new FormControl(null)

 })
  }

}
