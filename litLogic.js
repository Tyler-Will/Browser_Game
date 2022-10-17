let Question =document.getElementById("Question");
const gameMode = document.getElementById("gameMode");
const startLit =document.getElementById("startGamelit");
const gameAnswers = document.getElementById('gameAnswers');
const innerDiv = document.getElementById('innerDiv');
let answer1 =document.getElementById("answer1");
let answer2 =document.getElementById("answer2");
let answer3 =document.getElementById("answer3");
let answer4 =document.getElementById("answer4");
//Question
let question1="Can you see this?"
////Answers
let answer101= "Yes"
let answer102= "No"
let answer103= "Maybe"
let answer104= "I don't know"
//Question
let question2="What about this?"
////Answers

//Question
let question3="This?"
////Answers

//Question
let question4="Or this?"
////Answers

//Question
let question5="fee"
////Answers

//Question
let question6="fye"
////Answers

//Question
let question7="fo"
////Answers

//Question
let question8="fum"
////Answers

//Question
let question9="hee"
////Answers

//Question
let question10="ho"
////Answers



startLit.addEventListener("click", startGamelit)

function startGamelit(){
  Question.innerHTML=`${question1}`;
 gameAnswers.style.display = "block";
 gameMode.style.display = "none";
 answer1.innerHTML=`${answer101}`;
answer2.innerHTML=`${answer102}`;
answer3.innerHTML=`${answer103}`;
answer4.innerHTML=`${answer104}`;
}