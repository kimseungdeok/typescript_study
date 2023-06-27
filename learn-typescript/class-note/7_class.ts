class Person3 {
    // 클래스의 속성
    private name: string;
    public age: number;
    readonly log: string; // 읽기만 가능

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
