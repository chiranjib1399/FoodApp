import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { CartPageComponent } from "./components/pages/cart-page/cart-page.component";
import { FoodPageComponent } from "./components/pages/food-page/food-page.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { Register } from "./components/pages/register/register.componet";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes =[
    {path:'', component:HomeComponent,canActivate: [AuthGuard] },
    {path:'signup', component: Register , },
    {path:'search/:searchTerm', component: HomeComponent, canActivate: [AuthGuard]},
    {path:'tag/:tag',component:HomeComponent,canActivate: [AuthGuard] },
    {path:'food/:id', component:FoodPageComponent,canActivate: [AuthGuard]},
    {path:'cart-page', component:CartPageComponent,canActivate: [AuthGuard] },
    {path: 'login', component:LoginPageComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }