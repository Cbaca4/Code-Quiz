// adding questions for the user to answer
var quizData = [
    {
    question: "What is 9+10?",
    a: "21",
    b: "Dog",
    c: "fish",
    d: "19",
    correct: "d",

    question: "What swims in water?",
        a: "21",
        b: "Dog",
        c: "fish",
        d: "19",
    correct: "c",
     
    question: "What is 10+11?",
            a: "21",
            b: "Dog",
            c: "fish",
            d: "19",
    correct: "a",
    
    question: "What is the the best companion to have?",
        a: "21",
        b: "Dog",
        c: "fish",
        d: "19",
    correct: "b",
        },
];

var points = 0;
// function created for answering questions
function loadQuestion(jimmy, questionNumber) {
    $(".quiz-header").text("question" + questionNumber);
    $(".question").text(jimmy.question);
    $("#ans-a").text(jimmy.a);
    $("#ans-b").text(jimmy.b);
    $("#ans-c").text(jimmy.c);
    $("#ans-d").text(jimmy.d);
}
var questionNumber = 0;

showPage(".one");
$("btn-start").click(function () {
    showPage(".two");
    setTime();
    questionNumber = 0;
    loadQuestion(quizDatap[questionNumber],questionNumber+1);
});

if (selected !== quizData[questionNumber].correct) {
    secondsLeft -= 10;
} else {
    gamePoints +=20;
}

if(questionNumber === 4) {
    endGame();
    return;
}
questionNumber++;
loadQuestion(quizData[questionNumber], questionNumber + 1);

function endGame(){
    showPage(".three");
    clearInterval(timerInterval);
}