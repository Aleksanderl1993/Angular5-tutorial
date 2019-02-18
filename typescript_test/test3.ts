// interface Customer {
//     name: string;
//     age: number;
// }
//
// let customer: Customer: {
//     name: 'adam',
//     age: 22
// };

class Customer {
    name: string;
    wiek: number;

    constructor(name: string, wiek: number) {
        this.name = name;
        this.wiek = wiek;
    }

    welcome() {
        console.log(`Siemka ${this.name}, ${this.wiek}`);
    }

    // albo:

    welcome2() {
        return `Siemka ${this.name}, ${this.wiek}`;
    }

    // funkcja sprawdzająca, czy klient jest pełnoletni:

    isAdult() {
        if (this.wiek >= 18) {
            return true;
        } else {
            return false
        }
    }
}

let customer = new Customer('Jan', 22);
// customer.name = 'Jan';
// customer.wiek = 21;

console.log(customer);

// klasa w TS ^

customer.welcome();
console.log(customer.welcome2());
console.log(customer.isAdult());

// bezpośrednie wywołanie funkcji isAdult:
console.log(new Customer('Zbychu', 15).isAdult());
