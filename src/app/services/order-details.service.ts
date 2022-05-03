import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // foodDetails
  foodDetails =[
    {
      id:1,
      foodName: "Chicken with Veggie",
      foodDetails:"Grilled chicken with a bit of sauce n veggies.",
      foodPrice: 200,
      foodImg: "../../assets/img/chicken n veggie.jpg"
    },
    {
      id:2,
      foodName: "Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream.",
      foodPrice: 219,
      foodImg: "../../assets/img/ice cream.jpg"
    },
    {
      id:2,
      foodName: "Grilled meat",
      foodDetails:"Grilled meat with the finest spices.",
      foodPrice: 105,
      foodImg: "../../assets/img/grilled meat.jpg"
    },
    {
      id:3,
      foodName: "Paneer Burger",
      foodDetails:"Healthy burger.",
      foodPrice: 149,
      foodImg: "../../assets/img/burger.jpg"
    },
    {
      id:4,
      foodName: "Veggie Supreme",
      foodDetails:"Grilled chicken with a bit of sauce n veggies.",
      foodPrice: 369,
      foodImg: "../../assets/img/chicken n veggie.jpg"
    },
    {
      id:5,
      foodName: "Sandwich",
      foodDetails:"Healthy Sandwich.",
      foodPrice: 200,
      foodImg: "../../assets/img/sandwich.jpg"
    },
    {
      id:6,
      foodName: "Chicken n Veggie",
      foodDetails:"Grilled chicken with a bit of sauce n veggies.",
      foodPrice: 200,
      foodImg: "../../assets/img/chicken n veggie.jpg"
    }
   
  ];


}
