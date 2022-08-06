var highScores = document.querySelector("#highscores");
var clearHighScore = document.querySelector("#clearHighscore");
var screenReturn = document.querySelector("#return");

clearHighScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allUserScores = localStorage.getItem("allUserScores");
allUserScores = JSON.parse(allUserScores);

if (allUserScores !== null) {
    for (var i = 0; i < allUserScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = allUserScores[i].initals + " " + allUserScores[i].score;
        highScores.appendChild(li);
    }
}

screenReturn.addEventListener("click", function () {
    window.location.replace("./index.html");
});