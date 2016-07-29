import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'ng2-app',
  styleUrls: ['components/app/app.css'],
  templateUrl: '/components/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }