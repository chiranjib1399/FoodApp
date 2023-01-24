import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/foods';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
   food: Food;
  constructor(
    activatedRoute:ActivatedRoute,
    foodservice:FoodService ,
     private cartService:CartService,
     private router: Router
     ) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      foodservice.getFoodById(params.id).subscribe((serverFood)=>{
        this.food = serverFood;
      });
    })
   }

  ngOnInit() {
  }
  
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
