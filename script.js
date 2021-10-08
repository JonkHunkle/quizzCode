//when you load the page-->theres a link to the previous scores, timer is empty, and you have a welcome messsage with a button at the bottom
//click the button-->the timer starts, you are givven a random question, and answers to the question (A,B,C,D)
//click the choice--> check if the answer matches the choice
//
var timer = 60;
var right = 0;
var wrong = 0;
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

console.log(questionsArray[0].choices);

var title = document.createElement("h1");
title.innerHTML = questionsArray[0].question;

document.getElementById("title").appendChild(title);

for (let i = 0; i < questionsArray[0].choices.length; i++) {
  console.log("looping?");
  var choice = document.createElement("button");
  choice.innerHTML = questionsArray[0].choices[i];

  document.getElementById("choices").appendChild(choice);
}

// document.getElementById("start").addEventListener("click", function () {
//   console.log("hello");
//   getQuestion();
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
