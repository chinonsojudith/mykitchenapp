import { Component, OnInit } from '@angular/core';
// importing the OrderDetailsService
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    // creating an instance of it through dependency injection within the constructor() function
  constructor(private service:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
