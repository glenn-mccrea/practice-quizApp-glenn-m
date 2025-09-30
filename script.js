const quizQuestions = [
  {
    question: "Which animal is biggest?",
    choices: ["Cat", "Dog", "Elephant", "Duck"],
    answerIndex: 2,
  },
  {
    question: "Which animal is smallest?",
    choices: ["Cat", "Dog", "Elephant", "Duck"],
    answerIndex: 3,
  },
];
const questionText = document.getElementById("question-text");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const nextQ = document.getElementById("next-q");
const answerBlock = document.getElementById("answer-block");
let i = 0;
function loadQuestion(loop) {
  console.log(i);
  questionText.innerText = quizQuestions[i].question;
  option1.innerText = quizQuestions[i].choices[0];
  option2.innerText = quizQuestions[i].choices[1];
  option3.innerText = quizQuestions[i].choices[2];
  option4.innerText = quizQuestions[i].choices[3];
  i++;
  console.log(i);
}
window.addEventListener("load", loadQuestion(i));
/* //listner for answer collected
answerBlock.addEventListener("click", ())
//listener for next questions */
nextQ.addEventListener("click", () => {
  if (i < quizQuestions.length) {
    loadQuestion(i);
  } else {
    window.alert("Congratulations you completed the quiz!");
  }
});
