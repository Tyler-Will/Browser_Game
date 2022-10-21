let Question =document.getElementById("Question");
const gameMode = document.getElementById("gameMode");
const startLit =document.getElementById("startGamelit");
const gameAnswers1 = document.getElementById('gameAnswers1');
const gameAnswers2 = document.getElementById('gameAnswers2');
const gameAnswers3 = document.getElementById('gameAnswers3');
const gameAnswers4 = document.getElementById('gameAnswers4');
const gameAnswers5 = document.getElementById('gameAnswers5');
const gameAnswers6 = document.getElementById('gameAnswers6');
const gameAnswers7 = document.getElementById('gameAnswers7');
const gameAnswers8 = document.getElementById('gameAnswers8');
const gameAnswers9 = document.getElementById('gameAnswers9');
const gameAnswers10 = document.getElementById('gameAnswers10');
const gameAnswers = document.getElementsByTagName("gameAnswers")

//Q1 Answer Selector
let answerQ101 =document.getElementById("answer1.1");
let answerQ102 =document.getElementById("answer1.2");
let answerQ103 =document.getElementById("answer1.3");
let answerQ104 =document.getElementById("answer1.4");

//Q2 Answer Selector
let answerQ201 =document.getElementById("answer2.1");
let answerQ202 =document.getElementById("answer2.2");
let answerQ203 =document.getElementById("answer2.3");
let answerQ204 =document.getElementById("answer2.4");
//Q3 Answer Selector
let answerQ301 =document.getElementById("answer3.1");
let answerQ302 =document.getElementById("answer3.2");
let answerQ303 =document.getElementById("answer3.3");
let answerQ304 =document.getElementById("answer3.4");
//Q4 Answer Selector
let answerQ401 =document.getElementById("answer4.1");
let answerQ402 =document.getElementById("answer4.2");
let answerQ403 =document.getElementById("answer4.3");
let answerQ404 =document.getElementById("answer4.4");
//Q5 Answer Selector
let answerQ501 =document.getElementById("answer5.1");
let answerQ502 =document.getElementById("answer5.2");
let answerQ503 =document.getElementById("answer5.3");
let answerQ504 =document.getElementById("answer5.4");
//Q6 Answer Selector
let answerQ601 =document.getElementById("answer6.1");
let answerQ602 =document.getElementById("answer6.2");
let answerQ603 =document.getElementById("answer6.3");
let answerQ604 =document.getElementById("answer6.4");
//Q7 Answer Selector
let answerQ701 =document.getElementById("answer7.1");
let answerQ702 =document.getElementById("answer7.2");
let answerQ703 =document.getElementById("answer7.3");
let answerQ704 =document.getElementById("answer7.4");
//Q8 Answer Selector
let answerQ801 =document.getElementById("answer8.1");
let answerQ802 =document.getElementById("answer8.2");
let answerQ803 =document.getElementById("answer8.3");
let answerQ804 =document.getElementById("answer8.4");
//Q9 Answer Selector
let answerQ901 =document.getElementById("answer9.1");
let answerQ902 =document.getElementById("answer9.2");
let answerQ903 =document.getElementById("answer9.3");
let answerQ904 =document.getElementById("answer9.4");
//Q10 Answer Selector
let answerQ1001 =document.getElementById("answer10.1");
let answerQ1002 =document.getElementById("answer10.2");
let answerQ1003 =document.getElementById("answer10.3");
let answerQ1004 =document.getElementById("answer10.4");


//
let scoreBox =document.getElementById("scoreBox");
let tally =document.getElementById("tally");
let score =document.getElementById("score");

//Tally
let x=0
const y=0
/*let (x+y)=finalScore*/
//
startLit.addEventListener("click", litQuestion1)
//Question
let question1="How is the titular antagonist of Bram Stoker's novel, Dracula defeated?"
////Answers
let answer101= "A knife to the heart"/**/
let answer102= "Sunlight"
let answer103= "A wooden stake to the heart"
let answer104= "Tainted blood"
//Question
let question2="What is the name of Satan's alleged uncle in Mark Twain's novel The Mysterious Stranger?"
////Answers
let answer201="God"
let answer202="Beelzebub"
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
let question4="Out the following stories he had written during his lifetime which of these did H.P. Lovecraft favor the most?"
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
let question6="Setanta received rhe name Cú Chulainn after slaying ___"
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


function litQuestion1/*"How is the titular antagonist of Bram Stoker's novel, Dracula defeated?"*/(){
 Question.innerHTML=`${question1}`;
 gameAnswers1.style.display = "block";
 gameMode.style.display = "none";
 answerQ101.innerHTML=`${answer101}`;
 answerQ101.addEventListener("click", litQuestion2)
 answerQ101.addEventListener("click", rightAnswer)
answerQ102.innerHTML=`${answer102}`;
answerQ102.addEventListener("click", litQuestion2)
answerQ103.innerHTML=`${answer103}`;
answerQ103.addEventListener("click", litQuestion2)
answerQ104.innerHTML=`${answer104}`;
answerQ104.addEventListener("click", litQuestion2)
}

function litQuestion2/*"What is the name of Satan's alleged uncle in Mark Twain's novel The Mysterious Stranger?"*/(){
  Question.innerHTML=`${question2}`;
  gameAnswers1.style.display = "none";
 gameAnswers2.style.display = "block";
 gameMode.style.display = "none";
 answerQ201.innerHTML=`${answer201}`;
 answerQ201.addEventListener("click", litQuestion3)
answerQ202.innerHTML=`${answer202}`;
answerQ202.addEventListener("click", litQuestion3)
answerQ203.innerHTML=`${answer203}`;
answerQ203.addEventListener("click", litQuestion3)
answerQ204.innerHTML=`${answer204}`;
answerQ204.addEventListener("click", litQuestion3)
answerQ204.addEventListener("click", rightAnswer)
}

function litQuestion3/*"What two cities are being referenced in the title of Charles Dickens's novel A Tale of Two Cities?"*/(){
  Question.innerHTML=`${question3}`;
  gameAnswers2.style.display = "none";
  gameAnswers3.style.display = "block";
  gameMode.style.display = "none";
  answerQ301.innerHTML=`${answer301}`;
  answerQ301.addEventListener("click", litQuestion4)
 answerQ302.innerHTML=`${answer302}`;
 answerQ302.addEventListener("click", litQuestion4)
 answerQ302.addEventListener("click", rightAnswer)
 answerQ303.innerHTML=`${answer303}`;
 answerQ303.addEventListener("click", litQuestion4)
 answerQ304.innerHTML=`${answer304}`;
 answerQ304.addEventListener("click", litQuestion4)
}

function litQuestion4/*"Out the following stories he had written during his lifetime which of these did H.P. Lovecraft favor the most?"*/(){
  Question.innerHTML=`${question4}`;
  gameAnswers3.style.display = "none";
  gameAnswers4.style.display = "block";
  gameMode.style.display = "none";
  answerQ401.innerHTML=`${answer401}`;
  answerQ401.addEventListener("click", litQuestion5)
  answerQ401.addEventListener("click", rightAnswer)
 answerQ402.innerHTML=`${answer402}`;
 answerQ402.addEventListener("click", litQuestion5)
 answerQ403.innerHTML=`${answer403}`;
 answerQ403.addEventListener("click", litQuestion5)
 answerQ404.innerHTML=`${answer404}`;
 answerQ404.addEventListener("click", litQuestion5)
}

function litQuestion5/*"Who was the author responsible for the epic poem, Beowulf?"*/(){
  gameAnswers4.style.display = "none";
  Question.innerHTML=`${question5}`;
  gameAnswers5.style.display = "block";
  gameMode.style.display = "none";
  answerQ501.innerHTML=`${answer501}`;
  answerQ501.addEventListener("click", litQuestion6)
  answerQ501.addEventListener("click", rightAnswer)
 answerQ502.innerHTML=`${answer502}`;
 answerQ502.addEventListener("click", litQuestion6)
 answerQ503.innerHTML=`${answer503}`;
 answerQ503.addEventListener("click", litQuestion6)
 answerQ504.innerHTML=`${answer504}`;
 answerQ504.addEventListener("click", litQuestion6)
}

function litQuestion6/*"Setanta earned his famous name Cú Chulainn after slaying ___"*/(){
  gameAnswers5.style.display = "none";
  Question.innerHTML=`${question6}`;
  gameAnswers6.style.display = "block";
  gameMode.style.display = "none";
  answerQ601.innerHTML=`${answer601}`;
  answerQ601.addEventListener("click", litQuestion7)
 answerQ602.innerHTML=`${answer602}`;
 answerQ602.addEventListener("click", litQuestion7)
 answerQ603.innerHTML=`${answer603}`;
 answerQ603.addEventListener("click", litQuestion7)
 answerQ604.innerHTML=`${answer604}`;
 answerQ604.addEventListener("click", litQuestion7)
 answerQ604.addEventListener("click", rightAnswer)
}

function litQuestion7/*"How many thetrical adaptations of Uncle Tom's Cabin did  Harriet Beecher Stowe co-write?"*/(){
  gameAnswers6.style.display = "none";
  Question.innerHTML=`${question7}`;
  gameAnswers7.style.display = "block";
  gameMode.style.display = "none";
  answerQ701.innerHTML=`${answer701}`;
  answerQ701.addEventListener("click", litQuestion8)
 answerQ702.innerHTML=`${answer702}`;
 answerQ702.addEventListener("click", litQuestion8)
 answerQ703.innerHTML=`${answer703}`;
 answerQ703.addEventListener("click", litQuestion8)
 answerQ703.addEventListener("click", rightAnswer)
 answerQ704.innerHTML=`${answer704}`;
 answerQ704.addEventListener("click", litQuestion8)
}

function litQuestion8/*"What is the title of the 1915 novel where the protagonist inexplicably wakes up as an insect?"*/(){
  gameAnswers7.style.display = "none";
  Question.innerHTML=`${question8}`;
  gameAnswers8.style.display = "block";
  gameMode.style.display = "none";
  answerQ801.innerHTML=`${answer801}`;
  answerQ801.addEventListener("click", litQuestion9)
 answerQ802.innerHTML=`${answer802}`;
 answerQ802.addEventListener("click", litQuestion9)
 answerQ803.innerHTML=`${answer803}`;
 answerQ803.addEventListener("click", litQuestion9)
 answerQ804.innerHTML=`${answer804}`;
 answerQ804.addEventListener("click", litQuestion9)
 answerQ804.addEventListener("click", rightAnswer)
}

function litQuestion9/*"The Hobbit is ____ to the Lord of the Rings"*/(){
  gameAnswers8.style.display = "none";
  Question.innerHTML=`${question9}`;
  gameAnswers9.style.display = "block";
  gameMode.style.display = "none";
  answerQ901.innerHTML=`${answer901}`;
  answerQ901.addEventListener("click", litQuestion10)
 answerQ902.innerHTML=`${answer902}`;
 answerQ902.addEventListener("click", litQuestion10)
 answerQ902.addEventListener("click", rightAnswer)
 answerQ903.innerHTML=`${answer903}`;
 answerQ903.addEventListener("click", litQuestion10)
 answerQ904.innerHTML=`${answer904}`;
 answerQ904.addEventListener("click", litQuestion10)
}

function litQuestion10/*"What is the full title of Mary Shelley's 1818 novel?"*/(){
  gameAnswers9.style.display = "none";
  Question.innerHTML=`${question10}`;
  gameAnswers10.style.display = "block";
  gameMode.style.display = "none";
  answerQ1001.innerHTML=`${answer1001}`;
  answerQ1001.addEventListener("click", resultScreen)
 answerQ1002.innerHTML=`${answer1002}`;
 answerQ1002.addEventListener("click", resultScreen)
 answerQ1002.addEventListener("click", rightAnswer)
 answerQ1003.innerHTML=`${answer1003}`;
 answerQ1003.addEventListener("click", resultScreen)
 answerQ1004.innerHTML=`${answer1004}`;
 answerQ1004.addEventListener("click", resultScreen)
}

function resultScreen(){
  Question.style.display="none";
  scoreBox.style.display = "block";
  gameAnswers.style.display = "none";
  gameMode.style.display = "none";
score.innerHTML=`${x};`
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
}*/
function rightAnswer (){
   x++
    console.log(x)
  }
//function rightAnswer3rd(){
  //Question.innerHTML=`${question3}`;
  //gameAnswers.style.display = "block";
 //gameMode.style.display = "none";
 //answer1.innerHTML=`${answer201}`;
//answer2.innerHTML=`${answer202}`;
//answer3.innerHTML=`${answer203}`;
//answer4.innerHTML=`${answer204}`;
//}

