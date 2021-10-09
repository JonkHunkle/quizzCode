var timer = 60;
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
];

function displayQuestion() {
  var title = document.createElement("h1");
  title.innerHTML = questionsArray[currentQuestion].question;
  document.getElementById("title").appendChild(title);
  document.getElementById("choices").innerHTML = "";
  for (let i = 0; i < questionsArray[currentQuestion].choices.length; i++) {
    var choice = document.createElement("button");
    choice.innerHTML = questionsArray[currentQuestion].choices[i];
    choice.addEventListener("click", choiceClicked);
    choice.setAttribute("name", questionsArray[currentQuestion].choices[i]);
    document.getElementById("choices").appendChild(choice);
  }
}

displayQuestion();

function choiceClicked(event) {
  currentQuestion++;
  document.getElementById("title").innerHTML = "";
  if (event.target.name === questionsArray[currentQuestion].answer) {
    score += 10;
  } else {
    timer -= 10;
  }
  console.log(score);
  if (currentQuestion >= questionsArray.length) {
    displayend();
  } else {
    displayQuestion();
  }
}

// document.getElementById("start").addEventListener("click", function () {
//   console.log("hello");
//   displayQuesition();
//   document.getElementById("start").remove("start");
// });

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
