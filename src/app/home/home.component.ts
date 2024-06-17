
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = "Abhishek";
  lname = "";
  constructor(private userInfo:AuthService)
  {
    userInfo.currentUser.subscribe(response =>{
      this.name = response['firstname'],
      this.lname = response['lastname']
    })

  }


  
  

  

  

}
