import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  Chiken = "assets/chicken.jpg"
  FlankSteak = "assets/FlankSteak.jpg"
  Pizza = "assets/pizza.jpg"
  Lasgana = "assets/lasagna.jpg"
  Pasta = "assets/pasta.jpg"
  Hamburger ="assets/hamburger.jpg"
  //define some data containers such as arrays to store items
  items:Array<any>=[{"id":1,
  "name":"flank",
  "description":"ew",
  "price":"$100.00",
  "category":"desert",
  "img":"assets/FlankSteak.jpg",
  "isChecked":"false"}];
  Orders:Array<any>=[{

   }];

  constructor(private storage: Storage) { 
     console.log("loading saved items");

       // set a key/value
    storage.set('age', '23');

    // Or to get a key/value pair
    storage.get('age').then((val) => {
      console.log('Your age is', val);
    });



    let loadeditems= JSON.parse(localStorage.getItem("items"));
    if(loadeditems != null){
      this.items = loadeditems;
    }
    else{
      this.items =[];
    }

  }

  getItems(){
  	return this.items;
  }
  getOrders(){
    return this.Orders;
  }
  createOrder(name,number,price,date) {
    let randomId = Math.random().toString(36).substr(2, 5);
    this.Orders.push({
      'id' : randomId,
      'name': name,
      'price': price,
      'date' : date,
      'numOfItem': number,
    })
  }
  createItem(name, description, price, category, image){
  	  let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'name': name,
      'description': description,
      'price': price,
      'category': category,
      'img': image,
    });

    console.log("now saving all items:");
    let usersStringifiedObj = JSON.stringify(this.items);
    localStorage.setItem("items", usersStringifiedObj);

    // let loadeditems= JSON.parse(localStorage.getItem("items"));
    // console.log("saved no. of items"+loadeditems.length.toString())
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    
    if(newValues.img == undefined){
     	newValues.img = this.items[itemIndex].img
     }

    this.items[itemIndex] = newValues;
    console.log(newValues.img);

    console.log("now saving all items:");
    let usersStringifiedObj = JSON.stringify(this.items);
    localStorage.setItem("items", usersStringifiedObj);
  }

  deleteItem(id) {
    let itemIndex = this.items.findIndex(item => item.id == id);
  
    this.items.splice(itemIndex, 1);
    
    localStorage.clear();

  }
  deleteOrder(id) {
    let orderIndex = this.Orders.findIndex(Order => Order.id = id);
    this.Orders.splice(orderIndex, 1);
    localStorage.clear();
  }

  

 



}
