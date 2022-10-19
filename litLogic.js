let Question =document.getElementById("Question");
const gameMode = document.getElementById("gameMode");
const startLit =document.getElementById("startGamelit");
const gameAnswers = document.getElementById('gameAnswers');
const innerDiv = document.getElementById('innerDiv');
let answer1 =document.getElementById("answer1");
let answer2 =document.getElementById("answer2");
let answer3 =document.getElementById("answer3");
let answer4 =document.getElementById("answer4");
let tally =document.getElementById("tally");
let score =document.getElementById("score");
startLit.addEventListener("click", litQuestion1)
//Question
let question1="Who was the Author responsible for the 1897 novel, Dracula?"
////Answers
let answer101= "Bram Stoker"/**/
let answer102= "John Milton"
let answer103= "Sheridan Le Fanu"
let answer104= "F. W. Murnau"
//Question
let question2="What is the name of Satan's alleged uncle in Mark Twain's novel The Mysterious Stranger?"
////Answers
let answer201="God"
let answer202="Astaroth"
let answer203="Lucifer"
let answer204="Satan"/**/
//Question
let question3="What two cities are being referenced in the title of Charles Dickens's novel A Tale of Two Cities?"
////Answers
let answer301="London and New York"
let answer302="London and Paris"/**/
let answer303="New York and Boston"
let answer304="London and Versailles"
//Question
let question4="Out the following stories he had written during his lifetime which one did H.P. Lovecraft favor the most?"
////Answers
let answer401="The Cats of Ulthar"/**/
let answer402="Herbert West:Reanimator"
let answer403="The Rats in the Walls"
let answer404="The Dunwich Horror"
//Question
let question5="Who was the author responsible for the epic poem, Beowulf?"
////Answers
let answer501="Unknown"/**/
let answer502="Homer"
let answer503="Virgil"
let answer504="J. R. R. Tolkien"
//Question
let question6="Setanta earned his more famous name Cú Chulainn after slaying ___"
////Answers
let answer601="A dragon"
let answer602="An ogre"
let answer603="His father"
let answer604="A dog"/**/
//Question
let question7="How many thetrical adaptations of Uncle Tom's Cabin did  Harriet Beecher Stowe co-write?"
////Answers
let answer701="7"
let answer702="2"
let answer703="0"/**/
let answer704="4"
//Question
let question8="What is the title of the 1915 novel where the protagonist inexplicably wakes up as an insect?"
////Answers
let answer801="Frankenstein"
let answer802="A Metamorphoses"
let answer803="The Metamorphoses"
let answer804="The Metamorphosis"/**/
//Question
let question9="The Hobbit is ____ to the Lord of the Rings"
////Answers
let answer901="an interquel"
let answer902="a prequel"/**/
let answer903="a sequel"
let answer904="mostly unrelated"
//Question
let question10="What is the full title of Mary Shelley's 1818 novel?"
////Answers
let answer1001="Frankenstein"
let answer1002="Frankenstein; or, The Modern Prometheus"/**/
let answer1003="Mary Shelley's Frankenstein"
let answer1004="Doctor Frankenstein"




function litQuestion1(){
  Question.innerHTML=`${question1}`;
 gameAnswers.style.display = "block";
 gameMode.style.display = "none";
 answer1.innerHTML=`${answer101}`;
 answer1.addEventListener("click", litQuestion2)
answer2.innerHTML=`${answer102}`;
answer2.addEventListener("click", litQuestion2)
answer3.innerHTML=`${answer103}`;
answer3.addEventListener("click", litQuestion2)
answer4.innerHTML=`${answer104}`;
answer4.addEventListener("click", litQuestion2)
}

function litQuestion2(){
  Question.innerHTML=`${question2}`;
 gameAnswers.style.display = "block";
 gameMode.style.display = "none";
 answer1.innerHTML=`${answer201}`;
 answer1.addEventListener("click", litQuestion3)
answer2.innerHTML=`${answer202}`;
answer2.addEventListener("click", litQuestion3)
answer3.innerHTML=`${answer203}`;
answer3.addEventListener("click", litQuestion3)
answer4.innerHTML=`${answer204}`;
answer4.addEventListener("click", litQuestion3)
}

function litQuestion3(){
  Question.innerHTML=`${question3}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer301}`;
  answer1.addEventListener("click", litQuestion4)
 answer2.innerHTML=`${answer302}`;
 answer2.addEventListener("click", litQuestion4)
 answer3.innerHTML=`${answer303}`;
 answer3.addEventListener("click", litQuestion4)
 answer4.innerHTML=`${answer304}`;
 answer4.addEventListener("click", litQuestion4)
}

function litQuestion4(){
  Question.innerHTML=`${question4}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer401}`;
  answer1.addEventListener("click", litQuestion5)
 answer2.innerHTML=`${answer402}`;
 answer2.addEventListener("click", litQuestion5)
 answer3.innerHTML=`${answer403}`;
 answer3.addEventListener("click", litQuestion5)
 answer4.innerHTML=`${answer404}`;
 answer4.addEventListener("click", litQuestion5)
}

function litQuestion5(){
  Question.innerHTML=`${question5}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer501}`;
  answer1.addEventListener("click", litQuestion6)
 answer2.innerHTML=`${answer502}`;
 answer2.addEventListener("click", litQuestion6)
 answer3.innerHTML=`${answer503}`;
 answer3.addEventListener("click", litQuestion6)
 answer4.innerHTML=`${answer504}`;
 answer4.addEventListener("click", litQuestion6)
}

function litQuestion6(){
  Question.innerHTML=`${question6}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer601}`;
  answer1.addEventListener("click", litQuestion7)
 answer2.innerHTML=`${answer602}`;
 answer2.addEventListener("click", litQuestion7)
 answer3.innerHTML=`${answer603}`;
 answer3.addEventListener("click", litQuestion7)
 answer4.innerHTML=`${answer604}`;
 answer4.addEventListener("click", litQuestion7)
}

function litQuestion7(){
  Question.innerHTML=`${question7}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer701}`;
  answer1.addEventListener("click", litQuestion8)
 answer2.innerHTML=`${answer702}`;
 answer2.addEventListener("click", litQuestion8)
 answer3.innerHTML=`${answer703}`;
 answer3.addEventListener("click", litQuestion8)
 answer4.innerHTML=`${answer704}`;
 answer4.addEventListener("click", litQuestion8)
}

function litQuestion8(){
  Question.innerHTML=`${question8}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer801}`;
  answer1.addEventListener("click", litQuestion9)
 answer2.innerHTML=`${answer802}`;
 answer2.addEventListener("click", litQuestion9)
 answer3.innerHTML=`${answer803}`;
 answer3.addEventListener("click", litQuestion9)
 answer4.innerHTML=`${answer804}`;
 answer4.addEventListener("click", litQuestion9)
}

function litQuestion9(){
  Question.innerHTML=`${question9}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer901}`;
  answer1.addEventListener("click", litQuestion10)
 answer2.innerHTML=`${answer902}`;
 answer2.addEventListener("click", litQuestion10)
 answer3.innerHTML=`${answer903}`;
 answer3.addEventListener("click", litQuestion10)
 answer4.innerHTML=`${answer904}`;
 answer4.addEventListener("click", litQuestion10)
}

function litQuestion10(){
  Question.innerHTML=`${question10}`;
  gameAnswers.style.display = "block";
  gameMode.style.display = "none";
  answer1.innerHTML=`${answer1001}`;
  answer1.addEventListener("click", resultScreen)
 answer2.innerHTML=`${answer1002}`;
 answer2.addEventListener("click", resultScreen)
 answer3.innerHTML=`${answer1003}`;
 answer3.addEventListener("click", resultScreen)
 answer4.innerHTML=`${answer1004}`;
 answer4.addEventListener("click", resultScreen)
}

function resultScreen(){
console.log("Good job")
}



/*function wrongAnswer(){
  Question.innerHTML=`${question2}`;
  gameAnswers.style.display = "block";
 gameMode.style.display = "none";
 answer1.innerHTML=`${answer201}`;
answer2.innerHTML=`${answer202}`;
answer3.innerHTML=`${answer203}`;
answer4.innerHTML=`${answer204}`;
answer4.addEventListener("click", rightAnswer3rd)
}
function rightAnswer (){
  Question.innerHTML=`${question2}`;
  gameAnswers.style.display = "block";
 gameMode.style.display = "none";
 answer1.innerHTML=`${answer201}`;
answer2.innerHTML=`${answer202}`;
answer3.innerHTML=`${answer203}`;
answer4.innerHTML=`${answer204}`;
}

function rightAnswer3rd(){
  Question.innerHTML=`${question3}`;
  gameAnswers.style.display = "block";
 gameMode.style.display = "none";
 answer1.innerHTML=`${answer201}`;
answer2.innerHTML=`${answer202}`;
answer3.innerHTML=`${answer203}`;
answer4.innerHTML=`${answer204}`;
}*/
