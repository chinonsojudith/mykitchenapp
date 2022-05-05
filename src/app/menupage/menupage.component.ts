import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';    //importing from Angular
import { OrderDetailsService } from '../services/order-details.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  // creating an instance of it through dependency injection within the constructor() function.
  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getMenuId: any;
  menuData: any;
   
  ngOnInit(): void {
    // to get the id from the url
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if(this.getMenuId){
     this.menuData = this.service.foodDetails.filter((value) =>{
       return value.id == this.getMenuId;
     })
    }
  }

}
