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
