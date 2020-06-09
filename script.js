// Global variables
var btnEl = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submitBtn");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var timer = 120;
var correctAnswers = 0;
var incorrectAnswers = 5 - correctAnswers


// Be consistent w/ querySelector OR getElementById

// Event listener so that when the button is clicked, it will start the timer and ...
btnEl.addEventListener("click", function () {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
    }, 1000);

    // When start button is clicked, my p1 should switch to hide
    document.getElementById("p1").setAttribute("class", "hide");

    // When start button is clicked, my answerBtns should switch to show
    document.getElementById("btn1").setAttribute("class", "show");
    document.getElementById("btn2").setAttribute("class", "show");
    document.getElementById("btn3").setAttribute("class", "show");
    document.getElementById("btn4").setAttribute("class", "show");

    // When start button is clicked, my startBtn should switch to hide
    document.getElementById("startBtn").setAttribute("class", "hide");

    // When start button is clicked, my p2 should switch to show
    document.getElementById("p2").setAttribute("class", "show");

    // When start button is clicked, my submitBtn should switch to show
    document.getElementById("submitBtn").setAttribute("class", "show");

    // When start button is clicked execute questionFunc
    questionFunc();
});


var questionIndex = 0;
// //put in onclick function
function questionFunc() {
    var question = [
        {
            questionText: "Inside which HTML element do we put the JavaScript?",
            choice1: "<html>",
            choice2: "<script>",
            choice3: "<link>",
            choice4: "<body>",
            answer: "<script>",
            userAnswer: ""
            //answer needs to match string
        },
        {
            questionText: "What is the corrct syntax for referring to an external script?",
            choice1: "<script href=...>",
            choice2: "<script name=...>",
            choice3: "<script src=...>",
            choice4: "<script style=...>",
            answer: "<script src=...>",
            userAnswer: ""
        },
        {
            questionText: "How do you create a function in JavaScript??",
            choice1: "Function",
            choice2: "function = myFunction()",
            choice3: "Function = myFunction()",
            choice4: "function : myFunction()",
            answer: "function = myFunction()",
            userAnswer: ""
        },
        {
            questionText: "How does a FOR loop start?",
            choice1: "for (i = 0++)",
            choice2: "for (i > 0; i = 0)",
            choice3: "for (i = 0, i > 5, i++)",
            choice4: "for (i = 0; i > 5; i++)",
            answer: "for (i = 0; i > 5; i++)",
            userAnswer: ""
        },
        {
            questionText: "How can you add a comment in a JavaScript?",
            choice1: "// This is a comment.",
            choice2: "<!-- This is a comment. -->",
            choice3: "<-- This is a comment. --!>",
            choice4: "-This is a comment.-",
            answer: "// This is a comment.",
            userAnswer: ""
        }
    ]
    if (questionIndex == 0) {
        document.getElementById("question").textContent = question[questionIndex].questionText;
        document.getElementById("btn1").textContent = question[questionIndex].choice1;
        document.getElementById("btn2").textContent = question[questionIndex].choice2;
        document.getElementById("btn3").textContent = question[questionIndex].choice3;
        document.getElementById("btn4").textContent = question[questionIndex].choice4;
    }
    //update display for text in buttons and question
    // set text content by id answer
    submitBtn.addEventListener("click", function () {
        document.getElementById("question").textContent = question[questionIndex].questionText;
        document.getElementById("btn1").textContent = question[questionIndex].choice1;
        document.getElementById("btn2").textContent = question[questionIndex].choice2;
        document.getElementById("btn3").textContent = question[questionIndex].choice3;
        document.getElementById("btn4").textContent = question[questionIndex].choice4;
        questionIndex++;
    });

    btn1.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice1;
        if (question[questionIndex].userAnswer == question[questionIndex].answer) {
            correctAnswers++
        }
        console.log(correctAnswers)

    });
    btn2.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice2;
        if (question[questionIndex].userAnswer == question[questionIndex].answer) {
            correctAnswers++;
        }
        console.log(correctAnswers)
    });

    btn3.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice3;
        if (question[questionIndex].userAnswer == question[questionIndex].answer) {
            correctAnswers++;
        }
        console.log(correctAnswers)
    });

    btn4.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice4;
        if (question[questionIndex].userAnswer == question[questionIndex].answer) {
            correctAnswers++;
        }
        console.log(correctAnswers)
    });



}

//Need to make time drop for incorrect answers

