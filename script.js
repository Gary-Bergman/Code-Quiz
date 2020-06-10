// Global variables
var btnEl = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submitBtn");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btnInit = document.querySelector("#initialsBtn");
var timer = 120;
var questionIndex = 0;
var correctAnswers = 0;
// var incorrectAnswers = 5 - correctAnswers;
var subCount = 0;



// Update readme with vanilla javaScript functionality and how I made things work. Used bootstrap for syling. Created pages from scratch. etc.


// Be consistent w/ querySelector OR getElementById
// Be consistent w/ querySelector OR getElementById Be consistent w/ querySelector OR getElementById Be consistent w/ querySelector OR getElementById Be consistent w/ querySelector OR getElementById Be consistent w/ querySelector OR getElementById

// Event listener so that when the button is clicked, it will start the timer and ...
btnEl.addEventListener("click", function () {
    setInterval(function () {
        if (timer > 0 && subCount !== 5) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            document.getElementById("btn1").setAttribute("class", "hide");
            document.getElementById("btn2").setAttribute("class", "hide");
            document.getElementById("btn3").setAttribute("class", "hide");
            document.getElementById("btn4").setAttribute("class", "hide");

            document.getElementById("question").textContent = "Great job!"

            document.getElementById("p2").textContent = "Your final score is " + correctAnswers;

            document.getElementById("p3").setAttribute("class", "show");

            document.getElementById("p3").textContent = "Your final time is " + timer;

            document.getElementById("submitBtn").setAttribute("class", "hide");

            document.getElementById("initialsForm").setAttribute("class", "show");
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


// //put in onclick function
function questionFunc() {
    // array of objects containing key-value pairs for each question set
    var question = [
        {
            questionText: "Inside which HTML element do we link our JavaScript?",
            choice1: "<html>",
            choice2: "<script>",
            choice3: "<link>",
            choice4: "<body>",
            answer: "<script>",
            userAnswer: ""
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

    // This will initialize the first set of questions
    if (questionIndex == 0) {
        document.getElementById("question").textContent = question[questionIndex].questionText;
        document.getElementById("btn1").textContent = question[questionIndex].choice1;
        document.getElementById("btn2").textContent = question[questionIndex].choice2;
        document.getElementById("btn3").textContent = question[questionIndex].choice3;
        document.getElementById("btn4").textContent = question[questionIndex].choice4;
    }
    // This will set the next question (and answers) on click of submit button
    submitBtn.addEventListener("click", function () {
        if (question[questionIndex].userAnswer == question[questionIndex].answer) {
            correctAnswers++;
        } else {
            timer -= 20;
        };
        console.log(correctAnswers)


        // This will increase the questionIndex and ////////////
        if (questionIndex < (question.length - 1)) {
            questionIndex++;
            document.getElementById("question").textContent = question[questionIndex].questionText;
            document.getElementById("btn1").textContent = question[questionIndex].choice1;
            document.getElementById("btn2").textContent = question[questionIndex].choice2;
            document.getElementById("btn3").textContent = question[questionIndex].choice3;
            document.getElementById("btn4").textContent = question[questionIndex].choice4;
        }
        subCount++
    });


    // If the userAnswer is correct for each button, the correctAnswers count will increase.

    btn1.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice1;


    });
    btn2.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice2;
    });

    btn3.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice3;
    });

    btn4.addEventListener("click", function () {
        question[questionIndex].userAnswer = question[questionIndex].choice4;
    });
}

// Need to make the user only select one answer per question and to highlight the selected answer

//Need to create an end page that loads user score after timer runs out and/or after user goes through quiz and lets them enter initials to be save for highscores page

//Need to make a new html page for Highscores that save to local file

function saveHighscore() {
    var initials = intialsElement.value.trim();

    var highScoresArray = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var userScore = {
        score: correctAnswers,
        time: timer,
        intials: initials
    };
    highScoresArray.push(userScore);
    window.location.href = "highscore.html";
}
btnInit.addEventListener("click", function () {
    saveHighscore();
})

btnInit.onclick = highscore.html;
//need function to print highscores on page