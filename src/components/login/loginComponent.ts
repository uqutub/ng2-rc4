import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/index';



@Component({
    selector: 'login',
    templateUrl: '/components/login/login.html'
})
export class LoginComponent {

    constructor(private authenticationService: AuthenticationService, private router: Router) {

    }

    login(isValid, formValue) {
        
        event.preventDefault();

        let credentials: any = formValue;

        this.authenticationService.login(credentials).then(success => {
            if (success) {
                this.router.navigateByUrl('home');
            } else {
                alert('not a valid email and password');
            }
        });
    }
}
