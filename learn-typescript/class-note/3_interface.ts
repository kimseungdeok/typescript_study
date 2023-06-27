interface Person {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho : Person = {
    age: 33,
    name: '세호'
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

