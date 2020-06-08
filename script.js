
var timeEl = document.querySelector("#timer");
// var mainEl = document.getElementById("main");

var secondsLeft = 120;

startBtn.addEventListener("click", function () { 
    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
            timeEl.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
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

startBtn.addEventListener("click", function () { 
    
}
