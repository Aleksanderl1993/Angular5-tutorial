console.log('Siema!!!');

let x = 3;
let y: string;

y = 'napis';

let z: boolean;

z = true;
z = false;

console.log(x, y, z);

// let xs = [1, 2, 3];
let xs: number[] = [1, 2, 3];
// number[] - informuje, ze xs jest tablicą

let ys: Array<number>;
xs[0] = 4;
console.log(xs.length);
// ilość elementów w tabeli
console.log(ys);

// ...xs -> dodanie tablicy xs do czegos

// operator spread - wyjmuje elementy z jednej tablicy i wsadza do drugiej

let zs = [1, 5, 7, ...xs];

console.log(zs);

const n = 555;

let a = `Liczba n = ${n}`;

console.log(a);

console.log(`Pierwszy element tablicy: ${xs[1]}`);
console.log(`Pierwszy element tablicy: ${xs[1] + 4}`);

function welcome(name: string): string {
    return (`Siema ${name}` + `!`);
}

function welcome2(name: string, age?: number): string {
    return (`Siema ${name}` + ` ${age}` +  `!`);
}

function welcome3(name: string, age: number = 24): string {
    return (`Siema ${name}` + ` ${age}` +  `!`);
}

console.log(welcome('Aleksander'));
console.log(welcome2('Aleksander', 21));
console.log(welcome3('Aleksander'));

function welcome4(...names: string[]): string {
    return (`Siema ${names.join(', ')}` + `!`);
    // .join(separator ???)
}

console.log(welcome4('Janusz', 'Mirek'));

function welcome5(name: string): string {
    return (`Siema ${name}` + `!`);
}

console.log(['Czaruś', 'Łapa', 'Kazimierz'].map(welcome5));

// funkcja anonimowa:

console.log(['Czaruś', 'Łapa', 'Kazimierz'].map(function (name: string) {
    return `Siema ${name}` + '!';
}));

// .map --> na każdym elemencie tablicy zostanie wykonana funkcja welcome5

console.log(['Czaruś', 'Łapa', 'Kazimierz'].map((name => `Siema ${name}` + '!')));




interface Customer {
    name: string;
    age?: number;
    // ? -> pole nieobowiązkowe?
    address: Address;
    // zagnieżdżenie, patrz interface niżej
}

// interface definiuje typy

interface Address {
    street: string;
    city: string;
}

// enum CustomerType {
//     Standard,
//     Premium,
//     Vip
// }

// enumeracja - zmienna może przyjmować tylko kilka określonych wartości

function welcome6(name: string, ct: CustomerType) {
    if (ct === CustomerType.Vip) {
        console.log(`Siema ${name}` + `!`);
    }
}

// wyświetla index:
console.log(CustomerType.Vip);
// wyświetla nazwę:
console.log(CustomerType[CustomerType.Vip]);

//console.log(welcome6({
//    name: 'Kszysztof',
//    // tu nie musi być age, patrz wyżej
//   address: {
//        street: 'Baker',
//        city: 'London'
//    },
//},
//    <CustomerType.Vip>{}
//));













