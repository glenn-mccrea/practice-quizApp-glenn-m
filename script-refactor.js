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

const startingNum = 0;

let loadQuestion = (num) => {
  let indexNum = 0;
  console.log(num);
  questionText.innerText = quizQuestions[num].question;
  option1.innerText = quizQuestions[num].choices[0];
  option2.innerText = quizQuestions[num].choices[1];
  option3.innerText = quizQuestions[num].choices[2];
  option4.innerText = quizQuestions[num].choices[3];
  num++;
  indexNum = num;
  console.log(num);
  return indexNum;
};
console.log(indexNum);

window.addEventListener("load", loadQuestion(startingNum));

/* //listner for answer collected
answerBlock.addEventListener(
  "click" //THIS IS WHERE I NEED TO COMPLETE
); */

//listener for next questions
nextQ.addEventListener("click", () => {
  if (indexNum < quizQuestions.length) {
    loadQuestion(indexNum);
  } else {
    window.alert("Congratulations you completed the quiz!");
  }
});
