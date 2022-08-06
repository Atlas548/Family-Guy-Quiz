// Contains the arrays, question, question Number, and answers
let questions = [
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
var divQuestions = document.querySelector("#questions");
var divUl = document.createElement("ul");
var penalty = 10;
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

