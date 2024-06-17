import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AuthService,  } from './services/auth.service';
import { LoginServiceService } from './services/login-service.service';
import { HomeComponent } from './home/home.component';
import { EmailMaskingComponent } from './email-masking/email-masking.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EmailMaskingComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    LoginServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
