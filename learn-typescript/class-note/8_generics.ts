function logText(text) {
    console.log(text);
    return text;
}

logText("하이"); // 문자열 하이
logText(10); // 숫자 10
logText(true); // 진위값 true

function logText1<T>(text: T): T {
    console.log(text);
    return text;
}

logText1<string>("하이"); // 문자열 하이
logText1<number>(10); // 숫자 10
logText1<boolean>(true); // 진위값 true
// logText1<string>(10); // error

function logText2(text: string) {
    console.log(text);
    // text.split("").reverse().join("");
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}

logText2("a");
logNumber(10);

function logText3(text: string | number) {
    console.log(text);
    return text;
}

const a = logText3("a");
// a.split(""); // error
logText3(10);

function logText4<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText4<string>("abc");
str.split("");
const num = logText4<number>(10);


interface Dropdown {
    value: string;
    selected: boolean;
}

const obj: Dropdown = { value: "abc", selected: false };

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

const obj2: Dropdown2<string> = { value: "abc", selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}

logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength2("a");
// logTextLength2(10); // error
logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10); // error
// getShoppingItemOption<string>("a"); // error
getShoppingItemOption("name"); // name
