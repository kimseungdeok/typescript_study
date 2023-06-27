function logMessage(value: string) {
    console.log(value);
}

logMessage("hello");
// logMessage(100); // error

function logMessage1(value: string | number) {
    console.log(value);
}
