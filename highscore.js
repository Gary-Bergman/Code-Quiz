// I created this new js page because my script.js page will switch the user to the highscore.html after the last function is run

var scoresArray = [];
//find number of objects in array
var tempObj = JSON.parse(localStorage.getItem("highscores"));
console.log(tempObj.length);
// This pushes the saved scores
function saveScore() {
    for (var i = 0; i < tempObj.length; i++) {
        var value = localStorage.getItem("highscores");
        var scores = JSON.parse(value);
        scoresArray.push({ initials: "", score: "", time: "" });
        scoresArray[i].initials = scores[i].initials;
        scoresArray[i].score = scores[i].score;
        scoresArray[i].time = scores[i].time;
        console.log(scores);
    }
}
saveScore();

// This displays the users score on the page 
for (var i = 0; i < tempObj.length; i++) {
    var listItem = document.createElement("li");
    if (i < scoresArray.length) {
        listItem.textContent = [i + 1] + ".    Initials: " + scoresArray[i].initials + ",   Score: " + scoresArray[i].score + ",   Time: " + scoresArray[i].time + " seconds";
        document.getElementById("highscoresInfo").appendChild(listItem);
    }
}