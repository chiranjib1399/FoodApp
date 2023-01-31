import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  isSubmited = false;
  constructor( private formBuilder:FormBuilder ,
               private userService:UserService, 
               private activatedRoute:ActivatedRoute,
               private router:Router
               ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password: ['',[Validators.required]]

    });
    
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(): void{
    this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe();
}
}
