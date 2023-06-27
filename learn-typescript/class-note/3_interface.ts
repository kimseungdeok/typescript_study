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

interface StringArray1 {
    [index: string]: string;
}

const myArray: StringArray1 = {}



// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj1: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj1[] = 'a'; // error
obj1['cssFile'] = /ddd/; // error
obj1['cssFile'] = /abc/;
// obj1['cssFile'] = 123; // error

// 인터페이스 확장
interface Person1 {
    name: string;
    age: number;
}

interface Developer1 extends Person1 {
    language: string;
}

const junho2: Developer1 = {
    name: 'junho',
    age: 20,
    language: 'ts'
}