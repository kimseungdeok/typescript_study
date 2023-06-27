enum Shoes {
    Nike,
    Adidas,
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Shoes1 {
    Nike = "나이키",
    Adidas = "아디다스",
}

var myShoes1 = Shoes1.Nike;

enum Answer {
    Yes = "Y",
    No = "N",
}

function askQuestion(answer: string) {
    if (answer === "yes") {
        console.log("정답입니다.");
    }
    if (answer === "no") {
        console.log("오답입니다.");
    }
}
