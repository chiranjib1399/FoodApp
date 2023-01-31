import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  
  export class Register implements OnInit{
    signUpForm:FormGroup;
  constructor(private formBuilder: FormBuilder){

  }
    ngOnInit(){
        this.signUpForm = this.formBuilder.group({
            
        })

    }
  }