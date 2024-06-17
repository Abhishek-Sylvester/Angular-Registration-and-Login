import { EmailMaskingComponent } from './email-masking/email-masking.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './services/login-service.service';

const routes: Routes = [
  {path:'', redirectTo:'registration', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'home', component:HomeComponent},
  //canActivate:[LoginServiceService]
  {path:'email-Masking', component:EmailMaskingComponent}
  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent]
