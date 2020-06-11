
var scoresArray = [];
//find number of objects in array
var tempObj = JSON.parse(localStorage.getItem("highscores"));
console.log(tempObj.length);
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

for (var i = 0; i < tempObj.length; i++) {
    var listItem = document.createElement("li");
    if (i < scoresArray.length) {
        listItem.textContent = [i + 1] + ".    Initials: " + scoresArray[i].initials + ",   Score: " + scoresArray[i].score + ",   Time: " + scoresArray[i].time + " seconds";
        document.getElementById("highscoresInfo").appendChild(listItem);
    }
}