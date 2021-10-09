//element variables

var highScoreEl = document.getElementById("highScore");
var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz");
var welcomeCardEl = document.getElementById("welcomeCard");
var startEl = document.getElementById("start");
var titleEl = document.getElementById("title");
var choicesEl = document.getElementById("choices");

//variables for functions

var actualTimer;
var time = 60;
var score = 0;
var currentQuestion = 0;
var questionsArray = [
  {
    question: "what does js stand for?",
    answer: "javascript",
    choices: ["jello string", "jumpy sharks", "javascript", "joung smith"],
  },
  {
    question: "Java and Javascript are the same thing",
    answer: "false",
    choices: ["true", "false"],
  },
  {
    question: "can you add elements to a webpage with javascript?",
    answer: "yes",
    choices: ["yes", "no"],
  },
  {
    question: "what do you use to write javascript?",
    answer: "a keyboard",
    choices: ["A bananana", "a pen", "a keyboard", "a crayon"],
  },
];

function displayQuestion() {
  var title = document.createElement("h1");
  titleEl.innerHTML = "";
  title.innerHTML = questionsArray[currentQuestion].question;
  console.log(title);
  titleEl.appendChild(title);
  choicesEl.innerHTML = "";
  for (let i = 0; i < questionsArray[currentQuestion].choices.length; i++) {
    var choice = document.createElement("button");
    choice.innerHTML = questionsArray[currentQuestion].choices[i];
    choice.addEventListener("click", choiceClicked);
    choice.setAttribute("name", questionsArray[currentQuestion].choices[i]);
    choicesEl.appendChild(choice);
  }
}

//what happens when you click the button

function choiceClicked(event) {
  if (event.target.name === questionsArray[currentQuestion].answer) {
    score += 10;
  } else {
    time -= 10;
  }
  scoreEl.innerText = score;
  currentQuestion++;
  if (currentQuestion >= questionsArray.length) {
    console.log("game over");

    endGame();
  }
  displayQuestion();
}

//start button starts quiz and timer
startEl.addEventListener("click", function () {
  console.log("hello");
  timerEl.innerHTML = "Total time: : " + time;
  countdown();
  displayQuestion();
  startEl.remove("start");
  welcomeCardEl.remove("welcomeCard");
});

//countdown

function countdown() {
  actualTimer = setInterval(function () {
    time--;
    timerEl.textContent = "you have " + time + " seconds left";
  }, 1000);
}

//endgame function

function endGame() {
  if (currentQuestion == questionsArray.length) {
    title.innerHTML = "thanks for playing";
    console.log(title);
    choicesEl.innerHTML = "check your highscore and play again";
    clearInterval(actualTimer);
    console.log("this is the end", "yes it is");
  }
  //console.log(choicesEl);
}

// function getQuestion() {
//   document.getElementById("question").textContent =
//     questionsArray[currentQuestion].question;
//   document.getElementById("choiceA").textContent =
//     questionsArray[currentQuestion].choices[0];
//   document.getElementById("choiceB").textContent =
//     questionsArray[currentQuestion].choices[1];
//   document.getElementById("choiceC").textContent =
//     questionsArray[currentQuestion].choices[2];
//   document.getElementById("choiceD").textContent =
//     questionsArray[currentQuestion].choices[3];
//   currentQuestion++;
//   if (currentQuestion >= questionsArray.length) {
//     currentQuestion = 0;
//   }
// }

// function checkQuestion() {
//   if (
//     (questionsArray[currentQuestion].val(answer) =
//       questionsArray[currentQuestion].val(choice))
//   ) {
//     right++;
//     console.log("num right: " + right);
//     currentQuestion++;
//     return currentQuestion;
//   }
// }
// document.querySelector(".quiz").addEventListener("click", function (event) {
//   console.log("yo");
// console.log(event.target);
//   //checkQuestion();
// });
//for loop to go through choice id and place in text
