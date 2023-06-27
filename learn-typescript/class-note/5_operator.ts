function logMessage(value: string) {
    console.log(value);
}

logMessage("hello");
// logMessage(100); // error

function logMessage1(value: string | number) {
    if (typeof value === "number") {
        // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정
        value.toLocaleString();
    }
    if (typeof value === "string") {
        value.toString();
    }
    throw new TypeError("value must be string or number");
}

logMessage1("hello");

interface Developer11 {
    name: string;
    skill: string;
}

interface Person11 {
    name: string;
    age: number;
}

function askSomeone(someone: Person11 | Developer11) {
    someone.name; // 공통된 속성만 접근 가능
    // someone.skill; // error
    // someone.age; // error
}

askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "캡틴", age: 100 });
askSomeone({ name: "캡틴" });

function askSomeone1(someone: Developer11 & Person11) {
    someone.name;
    someone.skill;
    someone.age;
}

// askSomeone1({ name: "디벨로퍼", skill: "웹 개발", age: 100 });
askSomeone1({ name: "캡틴", age: 100, skill: "웹 개발" });
