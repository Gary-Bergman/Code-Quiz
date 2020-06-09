// Timer

// Select the id "myBtn" and assign it to a variable
var btnEl = document.querySelector("#startBtn");
// Timer variable
var timer = 120;
var stopwatchTimer = 120;
// Add an event listener so that when the button is clicked, it will start the timer
btnEl.addEventListener("click", function () {
    console.log("Button was clicked!!");
    if (stopwatchTimer > 0) {
        stopwatchTimer = setInterval(countdownTimer, 1000);
    }
});
function countdownTimer() {
    timer--;
    document.querySelector("#timer").textContent = timer;
}






var newButton1 = document.createElement("button")

newButton1.textContent = "<script>";
//question 1

// on click this will replace the html 
startBtn.addEventListener("click", function () {
    document.getElementById("question").innerHTML = "Inside which HTML element do we put the JavaScript?";

    document.getElementById("answer").innerHTML = newButton1
})



var questionIndex = 0;
//put in onclick function
//change function name
function q() {
    questionIndex++
    //update display for text in buttons and question
    // set text cont by id answer document.getElementById("Btn2").textContent = question[questionIndex].choice2
}

var question = [
    {
        questionText: "What is blah blah blah?",
        choice1: "Ablah",
        choice2: "Bsdflkjdsfj",
        choice3: "C",
        choice4: "D",
        answer: "Ablah"
        //answer needs to match string
    },
    {
        questionText: "What is the other thing?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: "D"
    },

];
