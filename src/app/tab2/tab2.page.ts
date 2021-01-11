
import { Component, OnInit } from '@angular/core';
import{Tab2Service } from './tab2.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  
  inquiryList: any = [];
  constructor(private t2Service:Tab2Service,private router: Router) {
    
  }
  
  
 ngOnInit() {
  this.t2Service.getRequest().subscribe((result)=>{
    this.inquiryList=result;
    console.log(this.inquiryList);
  })  
  }


  detailPage(){
    this.router.navigate(['/view']);

  }


  

}
