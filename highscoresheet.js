var highScores = document.querySelector("#highScores");
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

        var createLi = document.createElement("li");
        createLi.textContent = allUserScores[i].userInitals + " " + allUserScores[i].score;
        highScores.appendChild(createLi);
    }
}

screenReturn.addEventListener("click", function () {
    window.location.replace("./index.html");
});