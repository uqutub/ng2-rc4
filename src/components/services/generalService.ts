import { Injectable } from '@angular/core';

@Injectable()
export default class GeneralService {
    static getFruits(): FruitClass[] {
        let fruits: FruitClass[] = [
            { id: 0, name: "Apple", color: "Red" },
            { id: 1, name: "Banana", color: "Yellow" },
            { id: 2, name: "Peach", color: "Orange" },
            { id: 3, name: "Orange", color: "Orange" },
            { id: 4, name: "Mango", color: "Yellow" },
            { id: 5, name: "Jamun", color: "Purple" },
        ];
        return fruits;
    }
}





export class FruitClass {
    id: number;
    name: string;
    color: string;
}