// import { Customer3, Person, person } from './test4-dziedziczenie';
import * as fromCustomer3 from './test4-dziedziczenie';

// import { Observable } from 'rxjs';

const jan = new fromCustomer3.Customer3('Jan', 55, 'Edyta');
// console.log(jan);

// Observable.from(5);

// console.log(fromCustomer3.person);


function test(x: number) {
    if (x > 5) {
        var a = 5;
    //    var jest w obrebie funkcji !!!
    }
    return a;
}
function testb(x: number) {
    if (x > 5) {
        let b = 5;
        b = 4;
    //    let jest w obrebie bloku !!!
    }
    return b;
}

console.log(test(3));
console.log(testb(3));
