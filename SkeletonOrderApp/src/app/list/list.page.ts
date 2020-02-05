import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service'; 
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items = [];
  Totalprice = 0;
  Names = "";
  TotalNum = 0;
  Date = new Date();

  order_item_form: FormGroup;
  constructor(
    private router: Router,
    public itemService: ItemService,
    public formBuilder: FormBuilder,
  ) {}

  ngOnInit(){
    this.items  = this.itemService.getItems();

    this.order_item_form = this.formBuilder.group({})

    // this.order_item_form = this.formbuilder.group({
    //   isChecked: new FormControl(''
    // })
   
    // this.itemService.createItem("dd","dds");
  }
  getPrice() {
    for (let i in this.items) {
      this.Totalprice += this.items[i].price;
    }
  }
  orderPlace() {
    for (let i in this.items) {
      // change it so name of orders will take strings
     if (this.items[i].ischecked == true) {
       this.Totalprice += this.items[i].price;
       this.Names += this.items[i].name+ " ";
       this.TotalNum = this.TotalNum + 1;
      }
      
    }
    this.itemService.createOrder(this.Names,
      this.TotalNum,this.Totalprice,this.Date);

    console.log("orderPlaced");
   }

  }

