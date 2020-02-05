import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fSteak = "assets/FlankSteak.jpg"
  items = [
    {"name" : "FlankSteak", "description" : "default", "ischecked": "false", "img" : this.fSteak,
    "price" : "$21.95"}
    
   
  ]
  chiken = "assets/chiken.jpg"
  pizza = "assets/pizza.jpg"
  hamburger = "assets/hamburger.jpg"


  

  constructor(
    private router: Router,
    public itemService: ItemService
  ) {}

  ngOnInit(){
    this.items = this.itemService.getItems();
    if(this.items != undefined){
          console.log(this.items.length);
    }
    // this.itemService.createItem("dd","dds");
  }
  openNewItemPage() {
    console.log("+ clicked");
    this.router.navigate(["/add-item"]);
  }

  goToEditItem(item) {
    console.log(item);
    this.router.navigate(["/update-item",item]);
  }

}
