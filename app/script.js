//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var reservedScore = 0;
var adventurousScore = 0;
var fastidiousScore = 0;
var neuroticScore = 0;
var isFull = false;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var result = document.getElementById("result");
var restart = document.getElementById("restart");


//#TODO: Add Event Listeners to your answer choice variables.

q1a1.addEventListener("click", reserved);
q1a2.addEventListener("click", neurotic);
q1a3.addEventListener("click", adventurous);
q1a4.addEventListener("click", fastidious);

q2a1.addEventListener("click", neurotic);
q2a2.addEventListener("click", fastidious);
q2a3.addEventListener("click", reserved);
q2a4.addEventListener("click", adventurous);

q3a1.addEventListener("click", reserved);
q3a2.addEventListener("click", adventurous);
q3a3.addEventListener("click", neurotic);
q3a4.addEventListener("click", fastidious);

q4a1.addEventListener("click", fastidious);
q4a2.addEventListener("click", reserved);
q4a3.addEventListener("click", neurotic);
q4a4.addEventListener("click", adventurous);

q5a1.addEventListener("click", reserved);
q5a2.addEventListener("click", fastidious);
q5a3.addEventListener("click", adventurous);
q5a4.addEventListener("click", neurotic);

q6a1.addEventListener("click", reserved);
q6a2.addEventListener("click", adventurous);
q6a3.addEventListener("click", fastidious);
q6a4.addEventListener("click", neurotic);

restart.addEventListener("click", retake);





//#TODO: Define quiz functions here

function reserved() {
  reservedScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function neurotic() {
  neuroticScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function adventurous() {
  adventurousScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function fastidious() {
  fastidiousScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (reservedScore >= 3) {
    result.innerHTML =
      "You are a pretty reserved and shy person. Your idea of fun is a relaxing day by yourself in a controlled and safe environment.";
  } else if (adventurousScore >= 3) {
    result.innerHTML =
      "You are adventurous! You're always looking to try something new and meet new people. However, your wild spirit often means you jump into things when ill prepared.";
  } else if (fastidiousScore >= 3) {
    result.innerHTML =
      "You're fastidious! Always thinking one step ahead, you like to plan out your days and activities to reach maximum efficiency.";
  } else if (neuroticScore >= 3) {
    result.innerHTML =
      "Don't freak out, but you are slightly neurotic. The idea of change catapults you into an endless cycle of anxiety and fear, so you tend to stick to a low-key schedule.";
  } else {
    result.innerHTML = "Hmm, you're a pretty complex person... try again";
  }
}
//restart function here
function retake() {
  restart.innerHTML = "Retake quiz";
  questionCount = 0;
  adventurousScore = 0;
  fastidiousScore = 0;
  neuroticScore = 0;
  reservedScore = 0;
  result.innerHTML = "Your result is...";
}

