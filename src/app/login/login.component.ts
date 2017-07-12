import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './../custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    console.log('cons');
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      password: ['', Validators.required]
    })
    console.log('efsefefe');
  }

  login(){
    console.log(this.loginForm);
  }

}
