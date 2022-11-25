import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private api : ApiService) { }

  ngOnInit(): void {
  }

  message:String="";

  // User = {
  //   name : '',
  //   email :'',
  //   gender: '',
  //   age:'',
  //   password:''
  // }

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl(null,[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
    gender: new FormControl(''),
    age : new FormControl(''),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  })

  onSubmit() {
    this.api.signup(this.signupForm.value).subscribe(
      (res) => {
        this.message = res.message;

      },
      (err) => {
        if(err.status = 401){
            this.message = 'Account already exists. Please use different email';
          }
          else {
            this.message = `${err.message}`;
          }          
        }
      );
  }
}
