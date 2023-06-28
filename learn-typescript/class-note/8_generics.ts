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
