import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cartService:CartService,private userService:UserService , private router: Router) {
    this.cartService.getcartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount;
    })

   }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token')
  }

  lc(){
    const dc=localStorage.getItem('token');
    console.log(dc);
  }

}
