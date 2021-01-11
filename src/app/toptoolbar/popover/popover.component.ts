import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  role:string='';
  name:string='';

  constructor(private storage: Storage) { 

    this.storage.get('role').then((val) => {
      this.role=val;
    });
    this.storage.get('name').then((val) => {
      this.name=val;
    });
  }

  logout(){
    this.storage.clear();
    console.log("cleared");

  }

  ngOnInit() {}

}
