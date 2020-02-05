import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  Orders =[{
    "name" : "",
    "numOfOrders": "1",
    "TotalPrice" : 0

  }];
  constructor(
    private itemService:ItemService
  ) { }
 
  ngOnInit() {
    this.Orders = this.itemService.Orders;

    if(this.Orders != undefined){
      console.log(this.Orders.length);
}
  }
  deleteOrder() {
    console.log(this.Orders+" to be deleted")
    this.itemService.deleteOrder(this.itemService.Orders)
  }

}
