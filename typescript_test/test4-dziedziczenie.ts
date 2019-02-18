//class Person {
//    protected name: string;
//    wiek: number;
//
//    constructor(protected name: string, wiek: number) {
//        this.name = name;
//        this.wiek = wiek;
//    }

interface  CanTalk {
    talk(): string;
}

export class Person implements CanTalk {
    // protected name: string;  > niepotrzebne, bo niżej dodaliśmy protected do constructora
    // wiek: number;            ^

// ten parametr konstruktora jest jednocześnie polem klasy o tej samej nazwie
    constructor(protected name: string, protected wiek: number) {
        // this.name = name;
        // this.wiek = wiek;
        setTimeout(function () {
            console.log(this.name);
        }, 500);
        setTimeout(() => {
            console.log(this.name);
        }, 500);
    }

    welcome3() {
        console.log(`Siemka ${this.name}, ${this.wiek}`);
    }

    // albo:

    welcome4() {
        return `Siemka ${this.name}, ${this.wiek}`;
    }

    // funkcja sprawdzająca, czy klient jest pełnoletni:

    isAdult() {
        if (this.wiek >= 18) {
            return true;
        } else {
            return false;
        }
    }

    talk() {
        return 'hahaahah';
    }
}

// BARDZO WAŻNE:

export class Customer3 extends Person {
    advisor: string;

    constructor(name: string, wiek: number, advisor: string) {
        // super - pierwsza linijka
        super(name, wiek);
        // przypisanie do pola advisor:
        this.advisor = advisor;
    }

    powitanie() {
        return `Good morning ${this.name}`;
    }
}

export let person = new Customer3('Jan', 22, 'Kryśka');

person.welcome3();
console.log(person.welcome4());
console.log(person.isAdult());

// isAdult nie ma w customer3, ale jest w person, z której jest dziedziczona
console.log(new Customer3('Zbychu', 15, 'Kryśka').isAdult());


// obiekty klasy customer3 są też obiektami klasy person

let jan: Person = new Customer3('Jan', 33, 'Ewa');

console.log(jan);

console.log(jan.powitanie());

//customer.name = 'Gienek';

//console.log(customer.powitanie());