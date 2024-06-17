import { Component, OnInit, } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import{} from '@angular/fire'
import { CustomValidators} from '../confirmed.validator';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  displayMsg:string = " ";
  isAccountCreated:boolean = false;
  
  constructor(private authservice:AuthService){
    
    
  }

  registrationForm = new FormGroup({
    
    firstname:new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(/[a-zA-z]/)]),
    lastname:new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/[a-zA-z]/)]),
    email:new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z._]{3,}@[a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,6}/)]),
    username:new FormControl(''),
    
    

  },
 );

 passwordForm = new FormGroup({
  password:new FormControl('', [Validators.pattern(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/)]),
    confirm_password:new FormControl('', [Validators.pattern(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/)]),

 });

// [CustomValidators.MatchValidator('password', 'confirm_password')]

 

  get fname(): FormControl
  {
    return this.registrationForm.get('firstname') as FormControl;
  }

  get lname():FormControl
  {
    return this.registrationForm.get('lastname') as FormControl;
  }

  get email():FormControl
  {
    return this.registrationForm.get('email') as FormControl;
  }

  get password():FormControl
  {
    return this.passwordForm.get('password') as FormControl
  }

  get confirmpassword():FormControl
  {
    return this.passwordForm.get('confirm_password') as FormControl
  }

 
  RegisterUser()
  {
    // let fname = this.registrationForm.value['firstname'];
    // let lname = this.registrationForm.value['lastname'];
    // console.log(typeof fname);
    // console.log(typeof lname);
    // console.log(fname+"_"+lname);
    // console.warn(this.registrationForm.value);
    // console.log(this.registrationForm.get('confirm_password'));
    //console.log(this.registrationForm.get('confirm_password'));
    //console.log(this.registrationForm.get('firstname'));
    this.authservice.registerUser([
      this.registrationForm.value.firstname,
      this.registrationForm.value.lastname,
      this.registrationForm.value.email,
      //this.registrationForm.value.password,
      

    ]).subscribe(res =>{
      if(res == "Sucess")
      {
        this.displayMsg = "Account created sucessfully";
        this.isAccountCreated = true;
      }
      else if(res == "Already exists")
      {
        this.displayMsg = "Account already exists. try another email";
        this.isAccountCreated = false;
      }
      else
      {
        this.displayMsg = "An error occured";
        this.isAccountCreated = false;
      }
      console.log(res);
    })
    
    
    
  }

  GenerateUsername()
  {
    let fname = this.registrationForm.value['firstname'];
    let lname = this.registrationForm.value['lastname'];
    
    let user_name:string = fname+"_"+lname;
    user_name = user_name.toLowerCase();
    this.registrationForm.patchValue({
      username:user_name
    })
    return user_name
    
  }

  checkReEnteredPassword()
  {
    //alert("reEntered password method is bieng called");
    var password = this.passwordForm.controls['password'].value;
    var c_password =  this.passwordForm.controls['confirm_password'].value;
    //alert("This is the password value "+ password);
    //alert("This is the confirm password value "+ c_password);
    if(password != c_password)
    {
      //alert("Password and confirm password are not the same")
      this.passwordForm.controls['confirm_password'].setErrors({'passwordMisMatch': true});
      

    }
    else if(password == ' ')
    {
      this.passwordForm.controls['confirm_password'].setErrors({'passwordEmpty': true});
      this.passwordForm.controls['confirm_password'].setValue(' ');

    }
    else
    {
      //alert("both the passwords are same");
      

    }

  }

  

  matchPassword()
  {

  }




}

