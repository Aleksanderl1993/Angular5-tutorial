console.log('Siema!!!');
var x = 3;
var y;
y = 'napis';
var z;
z = true;
z = false;
console.log(x, y, z);
// let xs = [1, 2, 3];
var xs = [1, 2, 3];
// number[] - informuje, ze xs jest tablicą
var ys;
xs[0] = 4;
console.log(xs.length);
// ilość elementów w tabeli
console.log(ys);
// ...xs -> dodanie tablicy xs do czegos
// operator spread - wyjmuje elementy z jednej tablicy i wsadza do drugiej
var zs = [1, 5, 7].concat(xs);
console.log(zs);
var n = 555;
var a = "Liczba n = " + n;
console.log(a);
console.log("Pierwszy element tablicy: " + xs[1]);
console.log("Pierwszy element tablicy: " + (xs[1] + 4));
function welcome(name) {
    return ("Siema " + name + "!");
}
function welcome2(name, age) {
    return ("Siema " + name + (" " + age) + "!");
}
function welcome3(name, age) {
    if (age === void 0) { age = 24; }
    return ("Siema " + name + (" " + age) + "!");
}
console.log(welcome('Aleksander'));
console.log(welcome2('Aleksander', 21));
console.log(welcome3('Aleksander'));
function welcome4() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return ("Siema " + names.join(', ') + "!");
    // .join(separator ???)
}
console.log(welcome4('Janusz', 'Mirek'));
function welcome5(name) {
    return ("Siema " + name + "!");
}
console.log(['Czaruś', 'Łapa', 'Kazimierz'].map(welcome5));
// funkcja anonimowa:
console.log(['Czaruś', 'Łapa', 'Kazimierz'].map(function (name) {
    return "Siema " + name + '!';
}));
// .map --> na każdym elemencie tablicy zostanie wykonana funkcja welcome5
console.log(['Czaruś', 'Łapa', 'Kazimierz'].map((function (name) { return "Siema " + name + '!'; })));
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["Standard"] = 0] = "Standard";
    CustomerType[CustomerType["Premium"] = 1] = "Premium";
    CustomerType[CustomerType["Vip"] = 2] = "Vip";
})(CustomerType || (CustomerType = {}));
// enumeracja - zmienna może przyjmować tylko kilka określonych wartości
function welcome6(name, ct) {
    if (ct === CustomerType.Vip) {
        console.log("Siema " + name + "!");
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
