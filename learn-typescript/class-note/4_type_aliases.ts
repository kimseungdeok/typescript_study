// interface Person2 {
//     name: string;
//     age: number;
// }

type Person2 = {
    name: string;
    age: number;
};

let junho3: Person2 = {
    name: "준호",
    age: 33,
};

type MyString = string;
let str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
