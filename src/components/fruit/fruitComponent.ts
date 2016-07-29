import { Component } from '@angular/core';
import { GeneralService } from '../services';
import { FruitClass } from '../services/generalService';

@Component({
    selector: '[fruit]',
    // styleUrls: ['components/app/app.css'],
    templateUrl: '/components/fruit/fruit.html',
    inputs: ['fruitObj'],
    host: {
        'class': 'row',
        "[style.color]": "backgroundColor()",
        '[hidden]': 'hideBanana()'
    }
})
export class FruitComponent {
    fruitObj: FruitClass;

    constructor() {
        // this.fruitObj = { id:0, name: "aaaaa", color: "jshjshjshjs" };
    }

    backgroundColor() {
        return 'red';
    }

    hideBanana() {
        if (this.fruitObj.name === 'Banana') {
            return 'true';
        }

    }
}