
function Literature() {
  let Question = document.getElementById("Question");
  const gameMode = document.getElementById("gameMode");
  const startLit = document.getElementById("startGamelit");
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
  const gameAnswers = document.getElementsByTagName("gameAnswers");
  const hintCounter = document.getElementById("hintCounter")
const hintReveal = document.getElementById("hintReveal");
  //Q1 Answer Selector
  let answerQ101 = document.getElementById("answer1.1");
  let answerQ102 = document.getElementById("answer1.2");
  let answerQ103 = document.getElementById("answer1.3");
  let answerQ104 = document.getElementById("answer1.4");
  let hint101 = document.getElementById("hint1");
  //Q2 Answer Selector
  let answerQ201 = document.getElementById("answer2.1");
  let answerQ202 = document.getElementById("answer2.2");
  let answerQ203 = document.getElementById("answer2.3");
  let answerQ204 = document.getElementById("answer2.4");
  let hint102 = document.getElementById("hint2");
  //Q3 Answer Selector
  let answerQ301 = document.getElementById("answer3.1");
  let answerQ302 = document.getElementById("answer3.2");
  let answerQ303 = document.getElementById("answer3.3");
  let answerQ304 = document.getElementById("answer3.4");
  let hint103 = document.getElementById("hint3");
  //Q4 Answer Selector
  let answerQ401 = document.getElementById("answer4.1");
  let answerQ402 = document.getElementById("answer4.2");
  let answerQ403 = document.getElementById("answer4.3");
  let answerQ404 = document.getElementById("answer4.4");
  let hint104 = document.getElementById("hint4");
  //Q5 Answer Selector
  let answerQ501 = document.getElementById("answer5.1");
  let answerQ502 = document.getElementById("answer5.2");
  let answerQ503 = document.getElementById("answer5.3");
  let answerQ504 = document.getElementById("answer5.4");
  let hint105 = document.getElementById("hint5");
  //Q6 Answer Selector
  let answerQ601 = document.getElementById("answer6.1");
  let answerQ602 = document.getElementById("answer6.2");
  let answerQ603 = document.getElementById("answer6.3");
  let answerQ604 = document.getElementById("answer6.4");
  let hint106 = document.getElementById("hint6");
  //Q7 Answer Selector
  let answerQ701 = document.getElementById("answer7.1");
  let answerQ702 = document.getElementById("answer7.2");
  let answerQ703 = document.getElementById("answer7.3");
  let answerQ704 = document.getElementById("answer7.4");
  let hint107 = document.getElementById("hint7");
  //Q8 Answer Selector
  let answerQ801 = document.getElementById("answer8.1");
  let answerQ802 = document.getElementById("answer8.2");
  let answerQ803 = document.getElementById("answer8.3");
  let answerQ804 = document.getElementById("answer8.4");
  let hint108 = document.getElementById("hint8");
  //Q9 Answer Selector
  let answerQ901 = document.getElementById("answer9.1");
  let answerQ902 = document.getElementById("answer9.2");
  let answerQ903 = document.getElementById("answer9.3");
  let answerQ904 = document.getElementById("answer9.4");
  let hint109 = document.getElementById("hint9");
  //Q10 Answer Selector
  let answerQ1001 = document.getElementById("answer10.1");
  let answerQ1002 = document.getElementById("answer10.2");
  let answerQ1003 = document.getElementById("answer10.3");
  let answerQ1004 = document.getElementById("answer10.4");
  let hint110 = document.getElementById("hint10");


  //
  let scoreBox = document.getElementById("scoreBox");
  let tally = document.getElementById("tally");
  let tallyBox = document.getElementById("tallyBox")
  let score = document.getElementById("score");
  let scoreMessage = document.getElementById("scoreMessage");
  let questionBox = document.getElementById("questionBox")
  //Tally
  let x = 1
  let y = 1
  let h = 0
  /*let (x+y)=finalScore*/
  //
  //Success Message
  let a = "Amazing, a perfect score!"
  let b = "Impressive, this game is no match for you!"
  let c = "Not bad, but I've seen better."
  let d = "That's too bad. Try again next time."
  startLit.addEventListener("click", litQuestion1)
  //Question
  let question1 = "How is Dracula defeated in Bram Stoker's novel?"
  ////Answers
  let answer101 = "A knife to the heart"/**/
  let answer102 = "Sunlight"
  let answer103 = "A wooden stake to the heart"
  let answer104 = "Tainted blood"
  /////Hint
  let hintAnswer1 = "Dracula has never received a truly faithul adaptation. Most of what pop culture knows about Dracula (as well as vampires in general) actually comes from the many adaptations it has received over the years."
  /////
  //Question
  let question2 = "What is the name of Satan's alleged uncle in Mark Twain's novel The Mysterious Stranger?"
  ////Answers
  let answer201 = "God"
  let answer202 = "Beelzebub"
  let answer203 = "Lucifer"
  let answer204 = "Satan"/**/
  /////Hint
  let hintAnswer2 = "Satan has never been known for his honesty and Twain's version is no exception (...or is he?), but he has always been a master at trickery."
  /////
  //Question
  let question3 = "What two cities are being referenced in the title of Charles Dickens's novel A Tale of Two Cities?"
  ////Answers
  let answer301 = "London and New York"
  let answer302 = "London and Paris"/**/
  let answer303 = "New York and Boston"
  let answer304 = "London and Versailles"
  /////Hint
  let hintAnswer3 = "Up until the 1800s it seemed as if those two would never got along."
  /////
  //Question
  let question4 = "Out the following stories he had written during his lifetime which of these did H.P. Lovecraft favor the most?"
  ////Answers
  let answer401 = "The Cats of Ulthar"/**/
  let answer402 = "Herbert West:Reanimator"
  let answer403 = "The Rats in the Walls"
  let answer404 = "The Dunwich Horror"
  /////Hint
  let hintAnswer4 = "Lovecraft was very bigoted (to put it lightly) during his lifetime but there was one race (or rather, species) that he always had a special fondness for."
  /////
  //Question
  let question5 = "Who was the author responsible for the epic poem, Beowulf?"
  ////Answers
  let answer501 = "Unknown"/**/
  let answer502 = "Homer"
  let answer503 = "Virgil"
  let answer504 = "J. R. R. Tolkien"
  /////Hint
  let hintAnswer5 = "Instead of focusing on the names you do recognize take a moment to consider the ones that you don't."
  /////
  //Question
  let question6 = "Setanta received the name Cú Chulainn after slaying ___"
  ////Answers
  let answer601 = "A dragon"
  let answer602 = "An ogre"
  let answer603 = "His father"
  let answer604 = "A dog"/**/
  /////Hint
  let hintAnswer6 = "This 'name' is more akin to a title and it isn't quite as cool as it sounds."
  /////
  //Question
  let question7 = "How many theatrical adaptations of Uncle Tom's Cabin did  Harriet Beecher Stowe co-write?"
  ////Answers
  let answer701 = "7"
  let answer702 = "2"
  let answer703 = "0"/**/
  let answer704 = "4"
  /////Hint
  let hintAnswer7 = "Stowe had a distrust of drama. Unfortunately, copyright laws of the time didn't care."
  /////
  //Question
  let question8 = "What is the title of the 1915 novella where the protagonist inexplicably wakes up as an insect?"
  ////Answers
  let answer801 = "Frankenstein"
  let answer802 = "A Metamorphoses"
  let answer803 = "The Metamorphoses"
  let answer804 = "The Metamorphosis"/**/
  /////Hint
  let hintAnswer8 = "Ovid was a celebrated poet during his day but I don't think he had a fondness for insects, not that the other guy did either."
  /////
  //Question
  let question9 = "The Hobbit takes place ____ the Lord of the Rings"
  ////Answers
  let answer901 = "in between"
  let answer902 = "before"/**/
  let answer903 = "after"
  let answer904 = "in a seperate universe from"
  /////Hint
  let hintAnswer9 = "Imagine going from a Lord to a Hobbit."
  /////
  //Question
  let question10 = "What is the full title of Mary Shelley's 1818 novel?"
  ////Answers
  let answer1001 = "Frankenstein"
  let answer1002 = "Frankenstein; or, The Modern Prometheus"/**/
  let answer1003 = "Mary Shelley's Frankenstein"
  let answer1004 = "Doctor Frankenstein"
  /////Hint
  let hintAnswer10 = "If you can't figure this one out then try asking the Greeks."
  /////

  function litQuestion1/*"How is the titular antagonist of Bram Stoker's novel, Dracula defeated?"*/() {
    //document.body.style.backgroundColor = "brown";
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer1
    Question.innerHTML = `${question1}`;
    gameAnswers1.style.display = "block";
    gameMode.style.display = "none";
    tallyBox.style.display = "block";
    answerQ101.innerHTML = `${answer101}`;
    answerQ101.addEventListener("click", litQuestion2)
    answerQ101.addEventListener("click", rightAnswer)
    answerQ102.innerHTML = `${answer102}`;
    answerQ102.addEventListener("click", litQuestion2)
    answerQ103.innerHTML = `${answer103}`;
    answerQ103.addEventListener("click", litQuestion2)
    answerQ104.innerHTML = `${answer104}`;
    answerQ104.addEventListener("click", litQuestion2)
    hint101.addEventListener("click", showHint)
  }

  function litQuestion2/*"What is the name of Satan's alleged uncle in Mark Twain's novel The Mysterious Stranger?"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer2
    y++;
    tally.innerHTML = `${y}`;
    Question.innerHTML = `${question2}`;
    gameAnswers1.style.display = "none";
    gameAnswers2.style.display = "block";
    gameMode.style.display = "none";
    answerQ201.innerHTML = `${answer201}`;
    answerQ201.addEventListener("click", litQuestion3)
    answerQ202.innerHTML = `${answer202}`;
    answerQ202.addEventListener("click", litQuestion3)
    answerQ203.innerHTML = `${answer203}`;
    answerQ203.addEventListener("click", litQuestion3)
    answerQ204.innerHTML = `${answer204}`;
    answerQ204.addEventListener("click", litQuestion3)
    answerQ204.addEventListener("click", rightAnswer)
    hint102.addEventListener("click", showHint)
  }

  function litQuestion3/*"What two cities are being referenced in the title of Charles Dickens's novel A Tale of Two Cities?"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer3
    y++;
    tally.innerHTML = `${y}`;
    Question.innerHTML = `${question3}`;
    gameAnswers2.style.display = "none";
    gameAnswers3.style.display = "block";
    gameMode.style.display = "none";
    answerQ301.innerHTML = `${answer301}`;
    answerQ301.addEventListener("click", litQuestion4)
    answerQ302.innerHTML = `${answer302}`;
    answerQ302.addEventListener("click", litQuestion4)
    answerQ302.addEventListener("click", rightAnswer)
    answerQ303.innerHTML = `${answer303}`;
    answerQ303.addEventListener("click", litQuestion4)
    answerQ304.innerHTML = `${answer304}`;
    answerQ304.addEventListener("click", litQuestion4)
    hint103.addEventListener("click", showHint)
  }

  function litQuestion4/*"Out the following stories he had written during his lifetime which of these did H.P. Lovecraft favor the most?"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer4
    y++;
    tally.innerHTML = `${y}`;
    Question.innerHTML = `${question4}`;
    gameAnswers3.style.display = "none";
    gameAnswers4.style.display = "block";
    gameMode.style.display = "none";
    answerQ401.innerHTML = `${answer401}`;
    answerQ401.addEventListener("click", litQuestion5)
    answerQ401.addEventListener("click", rightAnswer)
    answerQ402.innerHTML = `${answer402}`;
    answerQ402.addEventListener("click", litQuestion5)
    answerQ403.innerHTML = `${answer403}`;
    answerQ403.addEventListener("click", litQuestion5)
    answerQ404.innerHTML = `${answer404}`;
    answerQ404.addEventListener("click", litQuestion5)
    hint104.addEventListener("click", showHint)
  }

  function litQuestion5/*"Who was the author responsible for the epic poem, Beowulf?"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer5
    y++;
    tally.innerHTML = `${y}`;
    gameAnswers4.style.display = "none";
    Question.innerHTML = `${question5}`;
    gameAnswers5.style.display = "block";
    gameMode.style.display = "none";
    answerQ501.innerHTML = `${answer501}`;
    answerQ501.addEventListener("click", litQuestion6)
    answerQ501.addEventListener("click", rightAnswer)
    answerQ502.innerHTML = `${answer502}`;
    answerQ502.addEventListener("click", litQuestion6)
    answerQ503.innerHTML = `${answer503}`;
    answerQ503.addEventListener("click", litQuestion6)
    answerQ504.innerHTML = `${answer504}`;
    answerQ504.addEventListener("click", litQuestion6)
    hint105.addEventListener("click", showHint)
  }

  function litQuestion6/*"Setanta earned his famous name Cú Chulainn after slaying ___"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer6
    y++;
    tally.innerHTML = `${y}`;
    gameAnswers5.style.display = "none";
    Question.innerHTML = `${question6}`;
    gameAnswers6.style.display = "block";
    gameMode.style.display = "none";
    answerQ601.innerHTML = `${answer601}`;
    answerQ601.addEventListener("click", litQuestion7)
    answerQ602.innerHTML = `${answer602}`;
    answerQ602.addEventListener("click", litQuestion7)
    answerQ603.innerHTML = `${answer603}`;
    answerQ603.addEventListener("click", litQuestion7)
    answerQ604.innerHTML = `${answer604}`;
    answerQ604.addEventListener("click", litQuestion7)
    answerQ604.addEventListener("click", rightAnswer)
    hint106.addEventListener("click", showHint)
  }

  function litQuestion7/*"How many thetrical adaptations of Uncle Tom's Cabin did  Harriet Beecher Stowe co-write?"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer7
    y++;
    tally.innerHTML = `${y}`;
    gameAnswers6.style.display = "none";
    Question.innerHTML = `${question7}`;
    gameAnswers7.style.display = "block";
    gameMode.style.display = "none";
    answerQ701.innerHTML = `${answer701}`;
    answerQ701.addEventListener("click", litQuestion8)
    answerQ702.innerHTML = `${answer702}`;
    answerQ702.addEventListener("click", litQuestion8)
    answerQ703.innerHTML = `${answer703}`;
    answerQ703.addEventListener("click", litQuestion8)
    answerQ703.addEventListener("click", rightAnswer)
    answerQ704.innerHTML = `${answer704}`;
    answerQ704.addEventListener("click", litQuestion8)
    hint107.addEventListener("click", showHint)
  }

  function litQuestion8/*"What is the title of the 1915 novel where the protagonist inexplicably wakes up as an insect?"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer8
    y++;
    tally.innerHTML = `${y}`;
    gameAnswers7.style.display = "none";
    Question.innerHTML = `${question8}`;
    gameAnswers8.style.display = "block";
    gameMode.style.display = "none";
    answerQ801.innerHTML = `${answer801}`;
    answerQ801.addEventListener("click", litQuestion9)
    answerQ802.innerHTML = `${answer802}`;
    answerQ802.addEventListener("click", litQuestion9)
    answerQ803.innerHTML = `${answer803}`;
    answerQ803.addEventListener("click", litQuestion9)
    answerQ804.innerHTML = `${answer804}`;
    answerQ804.addEventListener("click", litQuestion9)
    answerQ804.addEventListener("click", rightAnswer)
    hint108.addEventListener("click", showHint)
  }

  function litQuestion9/*"The Hobbit is ____ to the Lord of the Rings"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer9
    y++;
    tally.innerHTML = `${y}`;
    gameAnswers8.style.display = "none";
    Question.innerHTML = `${question9}`;
    gameAnswers9.style.display = "block";
    gameMode.style.display = "none";
    answerQ901.innerHTML = `${answer901}`;
    answerQ901.addEventListener("click", litQuestion10)
    answerQ902.innerHTML = `${answer902}`;
    answerQ902.addEventListener("click", litQuestion10)
    answerQ902.addEventListener("click", rightAnswer)
    answerQ903.innerHTML = `${answer903}`;
    answerQ903.addEventListener("click", litQuestion10)
    answerQ904.innerHTML = `${answer904}`;
    answerQ904.addEventListener("click", litQuestion10)
    hint109.addEventListener("click", showHint)
  }

  function litQuestion10/*"What is the full title of Mary Shelley's 1818 novel?"*/() {
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer10
    y++;
    tally.innerHTML = `${y}`;
    gameAnswers9.style.display = "none";
    Question.innerHTML = `${question10}`;
    gameAnswers10.style.display = "block";
    gameMode.style.display = "none";
    answerQ1001.innerHTML = `${answer1001}`;
    answerQ1001.addEventListener("click", resultScreen)
    answerQ1002.innerHTML = `${answer1002}`;
    answerQ1002.addEventListener("click", resultScreen)
    answerQ1002.addEventListener("click", rightAnswer)
    answerQ1003.innerHTML = `${answer1003}`;
    answerQ1003.addEventListener("click", resultScreen)
    answerQ1004.innerHTML = `${answer1004}`;
    answerQ1004.addEventListener("click", resultScreen)
    hint110.addEventListener("click", showHint)
  }

  function resultScreen() {
    hintReveal.style.display= "none"
    questionBox.style.display="none";
    gameAnswers10.style.display = "none";
    Question.style.display = "none";
    scoreBox.style.display = "block";
    //gameAnswers.style.display = "none";
    gameMode.style.display = "none";
    score.innerHTML = `${x};`
    tallyBox.style.display = "none";
  }


  function showHint() {
    hintReveal.style.display= "block"
    h++
    console.log(h)
    hintCounter.innerHTML= h
  }
  function rightAnswer() {
    console.log(x)
    x++

    if (x <= 3) {
      scoreMessage.innerHTML = d;
    } else if (x <= 6 && x >= 4)
      scoreMessage.innerHTML = c;
      else if (x <=9 && x >=7)
      scoreMessage.innerHTML= b;
    else if (x == 10) {
      scoreMessage.innerHTML= a;
    }
  }
  /*if (x == 10) {
        scoreMessage.innerHTML= a;
      } else if (x <=9 && x >=7)
      scoreMessage.innerHTML= b;
    else if (x <=6 && x >=4)
    scoreMessage.innerHTML= c;
  else if(x <=3)
  scoreMessage.innerHTML= d;
  } */
  //function rightAnswer3rd(){
  //Question.innerHTML=`${question3}`;
  //gameAnswers.style.display = "block";
  //gameMode.style.display = "none";
  //answer1.innerHTML=`${answer201}`;
  //answer2.innerHTML=`${answer202}`;
  //answer3.innerHTML=`${answer203}`;
  //answer4.innerHTML=`${answer204}`;
  //}
}
Literature()