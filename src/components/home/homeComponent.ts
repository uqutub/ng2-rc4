import { Component } from '@angular/core';
import { FruitComponent } from '../fruit/fruitComponent';

import { FruitClass } from '../services/generalService';
import { GeneralService } from '../services/index';

@Component({
    selector: 'home',
    //   styleUrls: ['components/app/app.css'],
    templateUrl: '/components/home/home.html',
    directives: [FruitComponent]
})
export class HomeComponent {
    fruits: FruitClass[] = [];

    constructor() {
        
    }

    ngOnInit() {
        this.fruits = GeneralService.getFruits();
        console.log(this.fruits);
    }


}