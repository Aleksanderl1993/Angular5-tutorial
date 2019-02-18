import {Component} from '@angular/core';
import {Customer, CustomerType} from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    //    kropka, bo określa położenie względem tego pliku (w tym folderze)
    styleUrls: ['./app.component.css'],
    styles: [
        '.isActive {text-decoration: underline;}',
        '.oddCategory {color: greenyellow;}'
    ]
})
export class AppComponent {
    customers: Customer[] = [
        {
            name: 'Jan Brzechwa',
            photoUrl: 'assets/images/pattern.png',
            age: 30,
            description: 'VIP',
            address: {
                street: 'Szeroka',
                houseNumber: 44,
                city: 'Łódź'
            },
            type: CustomerType.Premium,
            categories: [
                'Poland',
                'Duży obrót'
            ]
        },
        {
            name: 'Marian Paździoch',
            photoUrl: 'assets/images/pattern.png',
            age: 60,
            description: 'VIP',
            address: {
                street: 'ćwiartki 3',
                houseNumber: 4,
                city: 'Łódź'
            },
            type: CustomerType.Premium,
            categories: [
                'Poland',
                'Duży obrót'
            ]
        },
        {
            name: 'Kubuś Puchatek',
            photoUrl: 'assets/images/pattern.png',
            age: 3,
            description: 'VIP',
            address: {
                street: 'Puszcza',
                houseNumber: 44,
                city: 'Stumilowy Las'
            },
            type: CustomerType.Premium,
            categories: [
                'Poland',
                'Duży obrót'
            ]
        },
    ];
    // customer: Customer = {
    //     name: 'Aleksander Lickiewicz',
    //     photoUrl: '../assets/images/pattern.png',
    //     description: 'vip',
    //     age: 21,
    //     address: {
    //         street: 'Skrajna',
    //         houseNumber: 8,
    //         city: 'Szczebrzeszyn'
    //     },
    //     type: CustomerType.Premium,
    //     categories: [
    //         'zagraniczny',
    //         'mikroprzedsiębiorstwo',
    //         'duży obrót'
    //     ]
    // };

    customer: Customer = null;
    // customer: Customer = this.customers[0];

    // name: string = 'Aleksander Lickiewicz';
    nameColor = 'blue';
    // photoUrl: string = '../assets/images/pattern.png';
    isActive = true;
    showPhoto = false;

    CustomerType = CustomerType;

    // dziwny zapis, ale pozwala na użycie <ng-container *ngSwitchCase="CustomerType.Standard">*</ng-container>

    constructor() {
        setTimeout(() => {
            this.customer.categories.push('wpis');
        }, 3000);
    }

    changeIsActive() {
        this.isActive = !this.isActive;
//    jeżeli jest true, to po wykonaniu będzie false i na odwrót
    }

    changeColor() {
        this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue';
    }

}
