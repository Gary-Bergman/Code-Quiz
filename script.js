//timer
var timeEl = document.querySelector("#timer");
// var mainEl = document.getElementById("main");

var secondsLeft = 120;

startBtn.addEventListener("click", function () {
    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                // sendMessage();
            }

        }, 1000);
    }

    function sendMessage() {
        timeEl.textContent = " ";

        // var imgEl = document.createElement("img");

        // imgEl.setAttribute("src", "images/image_1.jpg");
        // mainEl.appendChild(imgEl);

    }

    setTime();

})
var newButton1 = document.createElement("button")

newButton1.textContent = "<script>";
//question 1

// on click this will replace the html 
startBtn.addEventListener("click", function () {
    document.getElementById("question").innerHTML = "Inside which HTML element do we put the JavaScript?";

    document.getElementById("answer").innerHTML = newButton1
})



//radio buttons from w3 quiz
{/* <div style="position:relative;width:100%;">
        <div id="altcontainer">
          <label class="radiocontainer" id="label1"> &lt;scripting&gt;<input type="radio" name="quiz" id="1" onclick="clickRadio(this)" value="1"><span class="checkmark"></span></label><label class="radiocontainer checkedlabel" id="label2"> &lt;script&gt;<input type="radio" name="quiz" id="2" onclick="clickRadio(this)" value="2"><span class="checkmark"></span></label><label class="radiocontainer" id="label3"> &lt;javascript&gt;<input type="radio" name="quiz" id="3" onclick="clickRadio(this)" value="3"><span class="checkmark"></span></label><label class="radiocontainer" id="label4"> &lt;js&gt;<input type="radio" name="quiz" id="4" onclick="clickRadio(this)" value="4"><span class="checkmark"></span></label>
        </div>
      </div> */}