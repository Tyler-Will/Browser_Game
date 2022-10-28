function film(){
  let Question =document.getElementById("Question");
  const gameMode = document.getElementById("gameMode");
  const startFilm =document.getElementById("startGamefilm");
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
  const hintCounter = document.getElementById("hintCounter")
  const hintReveal = document.getElementById("hintReveal");
  const videoHint =document.getElementById("videoHint")
  //Q1 Answer Selector
  let answerQ101 =document.getElementById("answer1.1");
  let answerQ102 =document.getElementById("answer1.2");
  let answerQ103 =document.getElementById("answer1.3");
  let answerQ104 =document.getElementById("answer1.4");
  let hint101 = document.getElementById("hint1");
  //Q2 Answer Selector
  let answerQ201 =document.getElementById("answer2.1");
  let answerQ202 =document.getElementById("answer2.2");
  let answerQ203 =document.getElementById("answer2.3");
  let answerQ204 =document.getElementById("answer2.4");
  let hint102 = document.getElementById("hint2");
  //Q3 Answer Selector
  let answerQ301 =document.getElementById("answer3.1");
  let answerQ302 =document.getElementById("answer3.2");
  let answerQ303 =document.getElementById("answer3.3");
  let answerQ304 =document.getElementById("answer3.4");
  let hint103 = document.getElementById("hint3");
  //Q4 Answer Selector
  let answerQ401 =document.getElementById("answer4.1");
  let answerQ402 =document.getElementById("answer4.2");
  let answerQ403 =document.getElementById("answer4.3");
  let answerQ404 =document.getElementById("answer4.4");
  let hint104 = document.getElementById("hint4");
  //Q5 Answer Selector
  let answerQ501 =document.getElementById("answer5.1");
  let answerQ502 =document.getElementById("answer5.2");
  let answerQ503 =document.getElementById("answer5.3");
  let answerQ504 =document.getElementById("answer5.4");
  let hint105 = document.getElementById("hint5");
  //Q6 Answer Selector
  let answerQ601 =document.getElementById("answer6.1");
  let answerQ602 =document.getElementById("answer6.2");
  let answerQ603 =document.getElementById("answer6.3");
  let answerQ604 =document.getElementById("answer6.4");
  let hint106 = document.getElementById("hint6");
  //Q7 Answer Selector
  let answerQ701 =document.getElementById("answer7.1");
  let answerQ702 =document.getElementById("answer7.2");
  let answerQ703 =document.getElementById("answer7.3");
  let answerQ704 =document.getElementById("answer7.4");
  let hint107 = document.getElementById("hint7");
  //Q8 Answer Selector
  let answerQ801 =document.getElementById("answer8.1");
  let answerQ802 =document.getElementById("answer8.2");
  let answerQ803 =document.getElementById("answer8.3");
  let answerQ804 =document.getElementById("answer8.4");
  let hint108 = document.getElementById("hint8");
  //Q9 Answer Selector
  let answerQ901 =document.getElementById("answer9.1");
  let answerQ902 =document.getElementById("answer9.2");
  let answerQ903 =document.getElementById("answer9.3");
  let answerQ904 =document.getElementById("answer9.4");
  let hint109 = document.getElementById("hint9");
  //Q10 Answer Selector
  let answerQ1001 =document.getElementById("answer10.1");
  let answerQ1002 =document.getElementById("answer10.2");
  let answerQ1003 =document.getElementById("answer10.3");
  let answerQ1004 =document.getElementById("answer10.4");
  let hint110 = document.getElementById("hint10");
  
  //
  let scoreBox =document.getElementById("scoreBox");
  let tally =document.getElementById("tally");
  let tallyBox=document.getElementById("tallyBox")
  let score =document.getElementById("score");
  let questionBox = document.getElementById("questionBox")
  //Tally
  let x=1
  let y=1
  let h=0
  /*let (x+y)=finalScore*/
  //
  //Success Message
  let a = "Amazing, a perfect score!"
  let b = "Impressive, this game is no match for you!"
  let c = "Not bad, but I've seen better."
  let d = "That's too bad. Try again next time."
  
  startFilm.addEventListener("click", litQuestion1)
  //Question
  let question1="What was the first feature-length animated film to ever be released in the U.S.?"
  ////Answers
  let answer101= "Snow White and the Seven Dwarfs"/**/
  let answer102= "Activity Photo"
  let answer103= "Fantasmagorie"
  let answer104= "Steamboat Willie"
  /////Hint
  let hintAnswer1 = "This should be easy."
  /////
  //Question
  let question2="When was the Nebuchadnezzar (the hovercraft featured in The Matrix) built?"
  ////Answers
  let answer201="2080"
  let answer202="3000"
  let answer203="2030"
  let answer204="2069"/**/
  /////Hint
  let hintAnswer2 = "Far but not too far."
  /////
  //Question
  let question3="In the 1990 film Nightbreed David Cronenberg plays a psychatrist and serial killer by the name of _______"
  ////Answers
  let answer301="Dr. Winters"
  let answer302="Dr. Decker"/**/
  let answer303="Dr. Brundle"
  let answer304="Dr. Patrick"
  /////Hint
  let hintAnswer3 = "His name has a lot of punch to it."
  /////
  //Question
  let question4="Which of these films was cited as the inspiration for Massive Attack's music video for their song, Voodoo in my Blood?"
  ////Answers
  let answer401="Possession"/**/
  let answer402="The Exorcist"
  let answer403="Evilspeak"
  let answer404="Scream"
  /////Hint
  let hintAnswer4 = ""
  /////
  //Question
  let question5="Why were so many copies of the film, Nosferatu destroyed?"
  ////Answers
  let answer501="Ordered by a court ruling due to it being an unauthorized adaptation."/**/
  let answer502="Ordered by a court ruling due to it violating censorship laws at the time."
  let answer503="Copies were poorly circulated and terribly preserved."
  let answer504="Store owners refused to stock it."
  /////Hint
  let hintAnswer5 = "If only Stowe were so lucky."
  /////
  //Question
  let question6="Who was the producer for the 1910 adaptation of Frankenstein?"
  ////Answers
  let answer601="Ivan Abramson"
  let answer602="Philip Ford"
  let answer603="Robert Siodmak"
  let answer604="Thomas Edison"/**/
  /////Hint
  let hintAnswer6 = "Dr. Frankenstein and the producer had more in common than you'd think."
  /////
  //Question
  let question7="What was the movie Gone with the Wind known for at the Oscars?"
  ////Answers
  let answer701="It was discovered that he really did give a damn."
  let answer702="First major movie to not win an Oscar"
  let answer703="First black woman to to win an Oscar."/**/
  let answer704="None of the cast appeared at the awards show."
  /////Hint
  let hintAnswer7 = "They walked so others could run."
  /////
  //Question
  let question8="What was the Shawshank?"
  ////Answers
  let answer801="Rodney"
  let answer802="The lost treasure."
  let answer803="The name of a gang."
  let answer804="A prison."/**/
  /////Hint
  let hintAnswer8 = "What comes to mind when you hear the word 'shank'?"
  /////
  //Question
  let question9="What did Cinderella lose?"
  ////Answers
  let answer901="An earring"
  let answer902="A shoe"/**/
  let answer903="Her ride home"
  let answer904="The apple"
  /////Hint
  let hintAnswer9 = "She's lucky that it didn't shatter."
  /////
  //Question
  let question10="Who was Nemo looking for?"
  ////Answers
  let answer1001="His mother"
  let answer1002="His father"/**/
  let answer1003="A pearl"
  let answer1004="A coral reef"
  /////Hint
  let hintAnswer10 = "It's sentient."
  /////
  
  function litQuestion1/*"What was the first feature-length animated film to ever be released in the U.S.?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer1
   Question.innerHTML=`${question1}`;
   gameAnswers1.style.display = "block";
   gameMode.style.display = "none";
   tallyBox.style.display="block";
   answerQ101.innerHTML=`${answer101}`;
   answerQ101.addEventListener("click", litQuestion2)
   answerQ101.addEventListener("click", rightAnswer)
  answerQ102.innerHTML=`${answer102}`;
  answerQ102.addEventListener("click", litQuestion2)
  answerQ103.innerHTML=`${answer103}`;
  answerQ103.addEventListener("click", litQuestion2)
  answerQ104.innerHTML=`${answer104}`;
  answerQ104.addEventListener("click", litQuestion2)
  hint101.addEventListener("click", showHint)
  }
  
  function litQuestion2/*"When was the Nebuchadnezzar (the hovercraft featured in The Matrix) built?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer2
    y++;
  tally.innerHTML=`${y}`;
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
  hint102.addEventListener("click", showHint)
  }
  
  function litQuestion3/*"In the 1990 film Nightbreed David Cronenberg plays a psychatrist and serial killer by the name of _______"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer3
    y++;
  tally.innerHTML=`${y}`;
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
   hint103.addEventListener("click", showHint)
  }
  
  function litQuestion4/*"Which of these films was cited as the inspiration for Massive Attack's music video for their song, Voodoo in my Blood?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = "https://www.youtube.com/embed/ElvLZMsYXlo?start=206"
    y++;
  tally.innerHTML=`${y}`;
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
   hint104.addEventListener("click", showHint)
  }
  
  function litQuestion5/*"Why were so many copies of the film, Nosferatu destroyed?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer5
    y++;
  tally.innerHTML=`${y}`;
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
   hint105.addEventListener("click", showHint)
  }
  
  function litQuestion6/*"Who was the producer for the 1910 adaptation of Frankenstein?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer6
    y++;
  tally.innerHTML=`${y}`;
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
   hint106.addEventListener("click", showHint)
  }
  
  function litQuestion7/*"What was the movie Gone with the Wind known for at the Oscars?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer7
    y++;
  tally.innerHTML=`${y}`;
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
   hint107.addEventListener("click", showHint)
  }
  
  function litQuestion8/*"What was the Shawshank?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer8
    y++;
  tally.innerHTML=`${y}`;
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
   hint108.addEventListener("click", showHint)
  }
  
  function litQuestion9/*"What did Cinderella lose?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer9
    y++;
  tally.innerHTML=`${y}`;
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
   hint109.addEventListener("click", showHint)
  }
  
  function litQuestion10/*"Who was Nemo looking for?"*/(){
    hintReveal.style.display= "none"
    hintReveal.innerHTML = hintAnswer10
    y++;
  tally.innerHTML=`${y}`;
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
   hint110.addEventListener("click", showHint)
  }
  
  function resultScreen(){
    hintReveal.style.display= "none"
    questionBox.style.display="none";
    gameAnswers10.style.display = "none";
    Question.style.display="none";
    scoreBox.style.display = "block";
    //gameAnswers.style.display = "none";
    gameMode.style.display = "none";
  score.innerHTML=`${x};`
  tallyBox.style.display="none";
  }
  function showHint() {
    hintReveal.style.display= "block"
    h++
    console.log(h)
    hintCounter.innerHTML= h
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
  film()