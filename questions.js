// Contains the arrays, question, question Number, and answers
var questions = [
    {
        question: "What year was Family Guy first Aired?",
        answer:"1999",
        options: [
            "1997",
            "1998",
            "1999",
            "2000"
        ]
    },
    {
        question: "Who is the voice actor for Peter Griffin?",
        answer: "Seth MacFarlane",
        options: [
            "Jim Carry",
            "Donald Trump",
            "Seth MacFarlane",
            "Ronald Miltion"
        ]
    },
    {
        question: "What season did Stewie take steroids?",
        answer: "Season 7",
        options: [
            "Season 5",
            "Season 6",
            "Season 7",
            "Season 8"
        ]
    },
    {
        question: "What year did Family Guy get cancelled the first time?",
        answer: "2000",
        options: [
            "2000",
            "2001",
            "2002",
            "2006"
        ]
    },
    {
        question: "Who was the voice actor for Meg in season 1?",
        answer: "Lacey Chabert",
        options: [
            "Mila Kunis",
            "Cree Summer",
            "Lacey Chabert",
            "Sean Kingston"
        ]
    }
];

// Variables
var indexQuestions = 0;
var score = 0;
var timer = document.querySelector("#timer");
var startTimer = document.querySelector("#startTimer");
var quizBox = document.querySelector("#Quiz-box");
var divQuestions = document.querySelector("#divQuestions");
var divUl = document.createElement("ul");
var timePenalty = 10;
var Interval = 0;
var secondsLeft = 100;


// start timer event listener to listen for a click function
startTimer.addEventListener("click", function() {
    // Checking to see if the timer reaches zero
    if (Interval === 0) {
        Interval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(Interval);
                timer.textContent = "Game Over!";
            }
        }, 1000);
    }
    render(indexQuestions);
})


// displays questions to user 
function render(indexQuestions) {
    divQuestions.innerHTML = "";
    divUl.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var questionUser = questions[indexQuestions].question;
        var choicesUser = questions[indexQuestions].options;
        divQuestions.textContent = questionUser;
    }

    choicesUser.forEach(function (item) {
        var itemLists = document.createElement("li")
        itemLists.textContent = item;
        divQuestions.appendChild(divUl);
        divUl.appendChild(itemLists);
        itemLists.addEventListener("click", (compareAnswers));
    })
}

// Function to depict on if the selected answer is correct or incorrect basied off the user choices and the correct answers
function compareAnswers(event) {
    var userElements = event.target;

    if(userElements.matches("li")) {
        var createDivId = document.createElement("div");
        if (userElements.textContent == questions[indexQuestions].answer) {
            score++;
            createDivId.textContent = "Congrats! The correct answer is: " + questions[indexQuestions].answer;
        } else {
            secondsLeft = secondsLeft - timePenalty;
            createDivId.textContent = "Wrong Answer! The correct answer is: " + questions[indexQuestions].answer;
        }
    }
    // Determines what question the user is on
    indexQuestions++;

    if (indexQuestions >= questions.length) {
        quizCompleted();
        createDivId.textContent = "Finished!" + "You got " + score + "/" + questions.length + "Correct :)";
    } else {
        render(indexQuestions);
    }
    divQuestions.appendChild(createDivId);
}

function quizCompleted() {
    divQuestions.innerHTML = "";
    timer.innerHTML = "";

    var header = document.createElement("h1");
    header.setAttribute("id", "header");
    header.textContent = "Congrats you have completed the quiz!";

    divQuestions.appendChild(header);

    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "paragraph");

    divQuestions.appendChild(paragraph);

    if(secondsLeft >= 0) {
        var remainingTime = secondsLeft;
        var secondParagraph = document.createElement("p");
        clearInterval(Interval);
        paragraph.textContent = "Your completed score is:" + remainingTime;

        divQuestions.appendChild(secondParagraph);
    }

    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.textContent = "Please enter your Initals: ";

    divQuestions.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "userInitals");
    input.textContent = "";

    divQuestions.appendChild(input);

    var submitbutton = document.createElement("button");
    submitbutton.setAttribute("type", "text");
    submitbutton.setAttribute("id", "submit");
    submitbutton.textContent ="Submit";

    divQuestions.appendChild(submitbutton);

    submitbutton.addEventListener("click", function() {
        var userInitals = input.value;

        if (userInitals === null) {
            console.log("No user initals submitted!")
        } else {
            var totalScore = {
                userInitals: userInitals,
                score: remainingTime
            }
            console.log(totalScore);
            var allUserScores = localStorage.getItem("allUserScores");
            if (allUserScores === null) {
                allUserScores = [];
            } else {
                allUserScores = JSON.parse(allUserScores);
            }
            allUserScores.push(totalScore);
            var recentScore = JSON.stringify(allUserScores);
            localStorage.setItem("allUserScores", recentScore);
            window.location.replace("./highscoresheet.html");
        }
    });

}