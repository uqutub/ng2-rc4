import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import AuthService from './authenticationService';
import { Router } from '@angular/router';

@Injectable()
export default class AuthGuard implements CanActivate {
    
    constructor(private router: Router) {

    }
    canActivate() : boolean {
        if(AuthService.isAuthorized()){
            return AuthService.isAuthorized();
        } else {
            this.router.navigateByUrl('login');
            return false;
        }
    }
}