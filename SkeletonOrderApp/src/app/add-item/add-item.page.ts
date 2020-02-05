import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  new_item_form: FormGroup;

  constructor(
     private router: Router,
 	 public formBuilder: FormBuilder,
 	     public itemService: ItemService

) { }

  ngOnInit() {

  	this.new_item_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('',Validators.required),
      date:new FormControl('', Validators.required),
      category:new FormControl('', Validators.required),
      image:new FormControl('', Validators.required)
    });

  }

  createItem(value){
  	console.log(value.name);
    console.log(value.price);
    console.log(value.date);
    console.log(value.image);
 
  	//save the item, and then go back
    //? 
    this.itemService.createItem(value.name,value.description,
      value.price, value.category, value.image);

  	this.goBack();
  }

  goBack(){
  	    this.router.navigate(['/home']);
  }

}
