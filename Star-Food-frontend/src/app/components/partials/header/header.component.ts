import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity = 0;
  user:User;

  constructor(private cartService:CartService, userService:UserService) {
    this.cartService.getcartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount;
    })

   }

  ngOnInit() {
  }

}
