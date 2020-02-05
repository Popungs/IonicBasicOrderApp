import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { ItemService } from '../item.service';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  current_item:any;
  edit_item_form:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router:Router
  	) { 
  		this.edit_item_form = this.formBuilder.group({
          name: new FormControl("", Validators.required),
          description: new FormControl("", Validators.required),
          price: new FormControl("", Validators.required),
          category: new FormControl("",Validators.required),
   
        });
        console.log("constructor of UpdateItemPage")
  }

  ngOnInit() {
  		console.log("onInit")
  		this.route.params.subscribe(
      param => {
        this.current_item = param;
        console.log(this.current_item);

        this.edit_item_form.patchValue({name:this.current_item.name});
        this.edit_item_form.patchValue({price:this.current_item.price});
        this.edit_item_form.patchValue({description:this.current_item.description});
        this.edit_item_form.patchValue({category:this.current_item.category});
        // this.edit_item_form.patchValue({image:this.current_item.image});

      }
    )
  }

  updateItem(value){
    console.log(value.name);
    console.log(value.price);
    console.log(value.description);
    console.log(value.category);
    // console.log(value.image);

  	//update the item in the items of th Service Object
  	//need to import the ItemService and create it in constructor
  	let newValues = {
      id: this.current_item.id,
      name: value.name,
      description: value.description,
      price: value.price,
      category: value.category,
      // image: value.image,
    }
    this.itemService.updateItem(newValues);


    this.goBack();
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  deleteItem() {
    console.log(this.current_item.id+" to be deleted")
    this.itemService.deleteItem(this.current_item.id)
    this.goBack();
  }

}
