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

// Event listener so that when the button is clicked, it will start the timer and the DOM will change some elements of the page to create the final page where the user can see the score, time, and enter initals to be stored.
btnEl.addEventListener("click", function () {
    setInterval(function () {
        if (timer > 0 && subCount !== 5) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            document.querySelector("#timer").textContent = timer;
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
            if (timer >= 20)
                timer -= 20;
        };
        console.log(correctAnswers)


        // This will increase the questionIndex and switch the text in the buttons to reflect the next question and answer set. This also track the subCount which is used in code above to confirm the click and make sure the user is on the right page.
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


    //On click events for each button the user can choose to determine if the button they selected matched the correct answer for that questionIndex, and if not there time will drop from the onclick above

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


// This will save the users initials at the end of the quiz along with the score and time to be implemented on the highscores page
function saveHighscore() {
    var initialsElement = document.getElementById("initials")
    var initials = initialsElement.value.trim();

    if (initials !== "") {
        // Object of users score, time, and initials to be pushed to the array
        var userScore = {
            score: correctAnswers,
            time: timer,
            initials: initials
        };

        // Creates an array for the highscores, if null it will be an empty array, else it will grab the userScore object and push it to the array
        var highScoresArray = JSON.parse(window.localStorage.getItem("highscores")) || [];
        highScoresArray.push(userScore);

        //This sets the object
        localStorage.setItem("highscores", JSON.stringify(highScoresArray));

        // This brings the user to the highscore page after the submit there initials
        window.location.href = "highscore.html";
    }
    // else {
    //     // create message to user saying "You must enter your initials to proceed" OR FIX THE REQUIRED BUTTON ON THE FORM!


    // create function to loop through indices of highScoresArray
    // var value = localStorage.getItem("highscores");
    // var scores = JSON.parse(value);

    // loop through array and display
}
// See highscore.js for the code that loops through the highScoresArray and puts each user's score on the page (highscore.html)


// At the end of the quiz, this will run the saveHighscores function above
btnInit.addEventListener("click", function (e) {
    e.preventDefault()
    saveHighscore();
})


// btnInit.onclick = highscore.html;
//need function to print highscores on page

//set local after line 188
// localStorage.setItem("highscores")
