import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements CanActivate  {
  constructor(private authService:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   
    return this.authService.isLoggedIn();
      
  }

  
}
