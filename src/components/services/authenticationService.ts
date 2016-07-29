import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export default class AuthenticationService {
    userIsloggedIn: EventEmitter<boolean>;

    constructor() {
        this.userIsloggedIn = new EventEmitter<boolean>();
    }

    login({ username, password }): Promise<boolean> {
        return new Promise(resolve => {
            let validCredentials: boolean = false;

            // @NOTE: In a normal scenario this check
            // should be performed against a web service:
            if (username === 'usuf52@gmail.com' &&
                password === '123') {
                validCredentials = true;
                window.sessionStorage.setItem('token', 'eyJhbGciOi/usuf52@gmail.com');
            }

            this.userIsloggedIn.emit(validCredentials);
            resolve(validCredentials);
        });
    }

    logout(): Promise<boolean> {
        return new Promise(resolve => {
            window.sessionStorage.removeItem('token');
            this.userIsloggedIn.emit(false);
            resolve(true);
        });
    }

    static isAuthorized(): boolean {
        return !!window.sessionStorage.getItem('token');
    }
}