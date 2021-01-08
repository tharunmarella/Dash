import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  isItemAvailable = false;
     items = [];
     cat=['New Product Develoupment','Testing','Research'];

     initializeItems(){
         this.items = ["tharun","Marella", "BMW"];
     }

     getItems(ev: any) {
         // Reset items back to all of the items
         this.initializeItems();

         // set val to the value of the searchbar
         const val = ev.target.value;

         // if the value is an empty string don't filter the items
         if (val && val.trim() !== '') {
             this.isItemAvailable = true;
             this.items = this.items.filter((item) => {
                 return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
             })
         } else {
             this.isItemAvailable = false;
         }
     }




add(item){
  this.cat.push(item);
}
  next(slides){
    slides.slideNext(); 
}
  constructor() {}

}
