import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, RouterModule, Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  
  
  constructor(private loginAuth:AuthService, private router:Router){}

  loginForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.pattern(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/)])
  });
  

  isUserValid:boolean = false;



  loginSubmitted()
  {
    console.log("Login submitted is being called");
    this.loginAuth.loginUser([this.loginForm.value.email, this.loginForm.value.password])
    .subscribe((res) =>{
      if(res == 'Failure')
      {
        this.isUserValid = false;
        alert("Login unsucessful")
      }
      else
      {
        this.isUserValid = true;
        this.loginAuth.setToken(res)
        this.loginAuth.currentUser.subscribe(response =>{
          console.log(response);
        })
        
        this.router.navigateByUrl('/home');
        
        
      }
    });
    
    console.log(this.loginForm)
  }

      

 

  get email():FormControl
  {
    return this.loginForm.get('email') as FormControl;
  }

  get password():FormControl
  {
    return this.loginForm.get('password') as FormControl;
  }



}
