import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { PasswordMatchValidator } from '../../../shared/validators/password_match_validator';

@Component({
    selector: 'app-register-page',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  
  export class Register implements OnInit{
    signUpForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private userService:UserService , private router: Router){

  }
    ngOnInit(){
        this.signUpForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            confirmPassword: ['', [Validators.required]],
            address: ['', [Validators.required, Validators.minLength(10)]]
        },{
            validators: PasswordMatchValidator('password', 'confirmPassword')
        })

        

    }

    signup(): void{
   this.userService.registerLocaleData(this.signUpForm.value).subscribe((msg)=>{
    console.log(msg);
    this.router.navigate(['login'])
    
   })
    }
  }