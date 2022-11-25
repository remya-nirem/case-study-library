import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private api : ApiService) { }
  
  message:String ="";

  User = {
    email :'',
    password:''
  }

  loginForm: any = new FormGroup(
    {
      email: new FormControl(null,[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    }
  )

  ngOnInit(): void {
  }

  onSubmit(){
      this.api.login(this.loginForm.value).subscribe(
      (res) => {
        //console.log(res.status);        
        localStorage.setItem('user', res.userId);
        this.router.navigate(['dashboard']); 
      },
      (err) => {
        if(err.status = 401){
          this.message = 'Unauthorized access. Please check your credentials.';
        }
      }
      // (err: HttpErrorResponse) => {
      //   if (err instanceof Error) {
      //     // client-side error
      //     this.message = `An error occured ${err.error.message}`;
      //   } else {
      //     this.message = `Backend returned error code ${err.status}, body was: ${err.message}`;
      //   }
      //}
      );
  }

}
