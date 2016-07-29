// <reference path="../../typings/index.d.ts">

import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginComponent } from './login/loginComponent';
import { HomeComponent } from './home/homeComponent';
import { AuthGuard } from './services/index';

const routes: RouterConfig = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "login", terminal: true }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];