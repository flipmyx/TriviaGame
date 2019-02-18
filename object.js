$(document).ready(function() {

var correctTally = 0;
var wrongTally = 0;
var winTally = 0;
var loseTally = 0;

var questions = [
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the most common pub name in the UK?",
    "correct_answer": "Red Lion",
    "incorrect_answers": [
        "Royal Oak",
        "White Hart",
        "Kings Head"
        ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What was the destination of the missing Malaysian Airlines flight MH370?",
    "correct_answer": "Beijing",
    "incorrect_answers": [
    "Kuala Lumpur",
    "Singapore",
    "Tokyo"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What alcoholic drink is mainly made from juniper berries?",
    "correct_answer": "Gin",
    "incorrect_answers": [
    "Vodka",
    "Rum",
    "Tequila"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the name given to Indian food cooked over charcoal in a clay oven?",
    "correct_answer": "Tandoori",
    "incorrect_answers": [
    "Biryani",
    "Pani puri",
    "Tiki masala"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the romanized Russian word for winter?",
    "correct_answer": "Zima",
    "incorrect_answers": [
    "Leto",
    "Vesna",
    "Osen"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following carbonated soft drinks were introduced first?",
    "correct_answer": "Dr. Pepper",
    "incorrect_answers": [
    "Coca-Cola",
    "Sprite",
    "Mountain Dew"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What was the soft drink Pepsi originally introduced as?",
    "correct_answer": "Brad's Drink",
    "incorrect_answers": [
    "Pepsin Pop",
    "Carolina Cola",
    "Pepsin Syrup"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the Portuguese word for Brazil?",
    "correct_answer": "Brasil",
    "incorrect_answers": [
    "Brazil",
    "Brasilia",
    "Brasiportuguesia"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?",
    "correct_answer": "Hewlett-Packard",
    "incorrect_answers": [
    "Toshiba",
    "Asus",
    "Dell"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of these words means idle spectator?",
    "correct_answer": "Gongoozler",
    "incorrect_answers": [
    "Gossypiboma",
    "Jentacular",
    "Meupareunia"
    ]
    }
];

function getCorrectAns() {
    var corrects = questions.map(function (cards) {
        return cards.correct_answer;
    });
    return corrects;
}

function getWrongAns() {
    var wrongs = questions.map(function (cards) {
        return cards.incorrect_answers;
    });
    return wrongs;
}

var correctAns = getCorrectAns();
var wrongAns = getWrongAns();

console.log("correctAns after getQuestions() is: " + correctAns);
console.log("wrong answers are: " + wrongAns[3]);

console.log("whats questions[9].type: " + questions[9].type);


questions[9].choices = questions[9].incorrect_answers;
questions[9].choices.push(questions[9].correct_answer);


console.log("whats in questions[9].choices: " + questions[9].choices);
userAnswer = "whatevs";// questions[9].correct_answer;
console.log(userAnswer);
// console.log(questions[9].choices(includes(correctAns[9])));
console.log("correctAns[9] is: " + correctAns[9]);

var isRight = correctAns[9].includes(userAnswer);

function rightOrWrong(rightOrWrong) {
    if (rightOrWrong) {
        console.log("Correct Tally: " + correctTally);
        console.log("Correct!");   
        correctTally++;
        console.log("Correct Tally: " + correctTally);
    } else {
        console.log("Wrong Tally: " + wrongTally);
        console.log("Wrong!");   
        wrongTally++;
        console.log("Wrong Tally: " + wrongTally);
    }
}

rightOrWrong(isRight);

function startButton() {
    var buttonz = $("<button>")
    var buttonz = $("<button>");
    buttonz.addClass("btn btn-outline-success btn-lg btn-block barcodefont fontL startbutton");
    buttonz.attr("data-name", "startbutton");
    buttonz.text("LETS GET STARTED");
    $("#startButton").append(buttonz);
};

function start() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

startButton();

function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  }
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }








function questionCard() {
    
}

$("#startButton").click(function() {

    setTimeout(gameOver, 20000);

    questionCard();

});















});