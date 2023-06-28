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