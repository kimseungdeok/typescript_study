interface Person {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let junho : Person = {
    age: 33,
    name: '준호'
}

// 함수에 인터페이스 활용
function getPerson(person : Person) {
    console.log(person);
}
const seungdeok : Person = {
    age: 27,
    name: '승덕'
}

getPerson(seungdeok);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum1: SumFunction;
sum1 = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr1: StringArray = ['a', 'b', 'c'];
// arr1[0] = 10; // error