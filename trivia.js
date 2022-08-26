var qTriviaNumber = -1;
var pointsCorrectTrivia = 0;
var quAndAnswersTrivia = [
  {
    qTrivia: "When the event start for 2023?",
    answer1: "February 24",
    answer2: "February 21",
    answer3: "February 11",
    answer4: "February 14",
  },
  {
    qTrivia: "Why are masks worn?",
    answer1: "Cu'z this is fun",
    answer2: "Cu'z the major want to",
    answer3: "Cu'z it's party",
    answer4: "By the law",
  },
  {
    qTrivia: "How much the event cost?",
    answer1: "100$",
    answer2: "Free",
    answer3: "50$",
    answer4: "25$",
  },
  {
    qTrivia: "What's is the name of the major?",
    answer1: "LaToya Cantrell",
    answer2: "Jhon cena",
    answer3: "Avi Cohen",
    answer4: "Yosef Hai",
  },
  {
    qTrivia: "How much suppliers do we have?",
    answer1: "8",
    answer2: "6",
    answer3: "5",
    answer4: "3",
  },
  {
    qTrivia: "What's is the name of the last event?",
    answer1: "Star Night",
    answer2: "The big party",
    answer3: "Twelfth Night",
    answer4: "There's no name to the event",
  },
  {
    qTrivia: "Which days the event goes?",
    answer1: "Only the first day and last",
    answer2: "Every day from the start until the end",
    answer3: "Only three days from the start",
    answer4: "Only four days from the start",
  },
  {
    qTrivia: "When was the first Mardi Gras?",
    answer1: "1801",
    answer2: "1957",
    answer3: "1842",
    answer4: "1857",
  },
  {
    qTrivia: "Who selected the colors of the Mardi Gras?",
    answer1: "Rex, the king of the carnival",
    answer2: "Yosef hai, the builder",
    answer3: "David, the king of Israel",
    answer4: "the major",
  },
  {
    qTrivia: "The mardi gras have a profit?",
    answer1: "No",
    answer2: "Something",
    answer3: "Yes",
    answer4: "Never",
  },
  {
    qTrivia: "Did you enjoy?",
    answer1: "No",
    answer2: "This Trivia are sucks",
    answer3: "Yes",
    answer4: "I think so",
  },
];

var correctAnswers = [
  "start",
  "aTrivia2",
  "aTrivia4",
  "aTrivia2",
  "aTrivia1",
  "aTrivia1",
  "aTrivia3",
  "aTrivia2",
  "aTrivia4",
  "aTrivia1",
  "aTrivia3",
];

//the start of the function and the vars
function qFunStart(idOfTheCorrectAnswer) {
  var buttonStartNext = document.getElementById("startNext");
  var titleQTrivia = document.getElementById("titleTrivia");
  var aTriviaOne = document.getElementById("aTrivia1");
  var aTriviaTwo = document.getElementById("aTrivia2");
  var aTriviaThree = document.getElementById("aTrivia3");
  var aTriviaFour = document.getElementById("aTrivia4");
  var colorAndAnswer = document.getElementById("colorAndAnswer");
  const startTheFunction = document.getElementById(idOfTheCorrectAnswer);

  //remove d-none from the q to show the options
  startTheFunction.addEventListener("click", function () {
    if (qTriviaNumber == -1) {
      buttonStartNext.classList.add("d-none");
      qTriviaNumber = 0;
      aTriviaOne.classList.remove("d-none");
      aTriviaTwo.classList.remove("d-none");
      aTriviaThree.classList.remove("d-none");
      aTriviaFour.classList.remove("d-none");
    }

    //pull from the array the text and q\answers
    if (qTriviaNumber < quAndAnswersTrivia.length) {
      var qTriviaArray = quAndAnswersTrivia[qTriviaNumber];
      titleQTrivia.innerHTML = qTriviaArray.qTrivia;
      aTriviaOne.innerHTML = qTriviaArray.answer1;
      aTriviaTwo.innerHTML = qTriviaArray.answer2;
      aTriviaThree.innerHTML = qTriviaArray.answer3;
      aTriviaFour.innerHTML = qTriviaArray.answer4;
      if (qTriviaNumber == 1) {
        colorAndAnswer.classList.remove("d-none");
      }

      //if - correct and wrong answer
      if (idOfTheCorrectAnswer == correctAnswers[qTriviaNumber]) {
        pointsCorrectTrivia++;
        colorAndAnswer.classList.add("correctGreen");
        colorAndAnswer.classList.remove("wrongRed");
        colorAndAnswer.innerHTML = "Correct Answer!";
      } else {
        colorAndAnswer.classList.add("wrongRed");
        colorAndAnswer.classList.remove("correctGreen");
        colorAndAnswer.innerHTML =
          "Wrong Answer. I know the next one you will be right!";
      }
      qTriviaNumber++;

      //add d-none to the answers and remove from the last massage the d-none
    } else {
      aTriviaFour.classList.add("d-none");
      aTriviaThree.classList.add("d-none");
      aTriviaTwo.classList.add("d-none");
      aTriviaOne.classList.add("d-none");
      titleQTrivia.classList.add("d-none");
      colorAndAnswer.classList.add("d-none");
      document.getElementById("enjoyTrivia").classList.remove("d-none");
    }
    //
    //
    document.getElementById("pointsTrivia").innerHTML =
      "Your Points is: " + pointsCorrectTrivia;
  });
}
qFunStart("startNext");
qFunStart("aTrivia1");
qFunStart("aTrivia2");
qFunStart("aTrivia3");
qFunStart("aTrivia4");
