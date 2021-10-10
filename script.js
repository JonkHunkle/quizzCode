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

//adds event listener to start button to start quiz and timer
startEl.addEventListener("click", function () {
  timerEl.innerHTML = "Total time: : " + time;
  countdown();
  displayQuestion();
  startEl.style.display = "none";
  welcomeCardEl.style.display = "none";
});

//displays the question you are on
function displayQuestion() {
  var title = document.createElement("h1");
  timerEl.innerHTML = "Time left: " + time;
  title.innerHTML = "";
  title.innerHTML = questionsArray[currentQuestion].question;
  titleEl.innerHTML = "";
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

//what happens when you click on your answer

function choiceClicked(event) {
  if (event.target.name === questionsArray[currentQuestion].answer) {
    score += 10;
  } else {
    time -= 10;
  }
  scoreEl.innerHTML = "score: " + score;
  currentQuestion++;
  if (currentQuestion >= questionsArray.length) {
    endGame();
  } else {
    displayQuestion();
  }
}

//countdown. ends game at 0

function countdown() {
  actualTimer = setInterval(function () {
    time--;
    timerEl.textContent = "you have " + time + " seconds left";
    if (time <= 0) {
      clearInterval(actualTimer);
      endGame();
    }
  }, 1000);
}

//endgame function. lets you add your score to the leaderboard

function endGame() {
  clearInterval(actualTimer);
  title.innerHTML = "thanks for playing";
  choicesEl.innerHTML = "check your highscore and play again";
  timerEl.innerHTML = "";
  var subBtn = document.createElement("button");
  var inputEl = document.createElement("input");
  var pEl = document.createElement("p");
  pEl.innerHTML = "~enter your initials~";
  subBtn.innerHTML = "submit initials and scores";
  subBtn.id = "retry ";
  subBtn.addEventListener("click", submit);
  inputEl.id = "names";
  choicesEl.appendChild(pEl);
  choicesEl.appendChild(inputEl);
  choicesEl.appendChild(subBtn);
}

//click the "highscore" button to view the highscores

highScoreEl.addEventListener("click", function () {
  clearInterval(actualTimer);
  timerEl.innerHTML = "";
  choicesEl.innerHTML = "";
  scoreEl.innerHTML = "";
  title.innerHTML = "check out these high scores!";
  startEl.style.display = "none";
  welcomeCardEl.style.display = "none";
  var back = document.createElement("button");
  back.id = "back";
  back.addEventListener("click", welcome);
  back.innerHTML = "press me to start again";
  choicesEl.appendChild(back);
  pull();
});

//submit socre and initials to local storage
function submit() {
  localStorage.setItem(document.getElementById("names").value, score);
  welcome();
  choicesEl.innerHTML = "";
  titleEl.innerHTML = "";
  timerEl.innerHTML = "";
  scoreEl.innerHTML = "";
  time = 60;
}

//retrieve score and initials from local storage (add to highscore page)
function pull() {
  for (var key in localStorage) {
    var pEl = document.createElement("p");
    pEl.innerHTML = "name: " + key + " score: " + localStorage[key];
    if (typeof localStorage[key] === "string") choicesEl.appendChild(pEl);
  }
}

//displays welcome message.
function welcome() {
  startEl.style.display = "block";
  welcomeCardEl.style.display = "block";
  currentQuestion = 0;
  score = 0;
  titleEl.innerHTML = "";
  choicesEl.innerHTML = "";
  scoreEl.innerHTML = "";
  timerEl.innerHTML = "";
}
