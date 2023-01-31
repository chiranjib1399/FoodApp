import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodService } from './services/food.service';
import {RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartService } from './services/cart.service';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ErrorHandlerService } from './services/err-handler.service';
import { Register } from './components/pages/register/register.componet';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    Register
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FoodService,CartService,UserService,ErrorHandlerService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
