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
userAnswer = questions[9].correct_answer;
console.log(userAnswer);
// console.log(questions[9].choices(includes(correctAns[9])));
console.log("correctAns[9] is: " + correctAns[9]);





// $(document).ready(function() {

    var correctTally = 0;
    var wrongTally = 0;
    var winTally = 0;
    var loseTally = 0;
    var questionNum = 0;
    
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

    // function startButton() {    
    //     var buttonz = $("<button>");
    //     buttonz.addClass("btn btn-outline-success btn-lg btn-block barcodefont fontL startbutton");
    //     buttonz.attr("style", "padding: 10% 0");
    //     buttonz.text("LETS GET STARTED");
    //     $("#startButton").append(buttonz);
    // };

    function gameOver() {
        $("#clock").hide('slow');
        $("#displayArea").addClass("d-none");
        $("#gameOver").removeClass("d-none");
    }
    
    function questionCard() {
    
        for (let qObj of questions) {

            var questionz = $("<div>").addClass("bg-info block mb-1 jeopardyfont fontR text-center");
            questionz.text(qObj.question);
            $("#questions").append(questionz);
            var preguntas1 = $("<div>").addClass("bg-primary block mb-1  jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas1);
            preguntas1.text(qObj.incorrect_answers[0]);
            var preguntas2 = $("<div>").addClass("bg-primary block mb-1 jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas2);
            preguntas2.text(qObj.incorrect_answers[1]);
            var preguntas3 = $("<div>").addClass("bg-primary block mb-1 jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas3);
            preguntas3.text(qObj.correct_answer);
            var preguntas4 = $("<div>").addClass("bg-primary block mb-1 jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas4);
            preguntas4.text(qObj.incorrect_answers[2]);
        
        };
    }

    // startButton();

    $("#startButton").click(function() {
        console.log("start button clicked");
        startCountdown();
        setTimeout(gameOver, 360000);
        $("#startButton").hide('slow');
        // $("#clock").show('slow');
        $("#questions").removeClass('d-none');
        questionCard();
    });

    $(".ansbutton").click(function() {
        var answer = $(this).text();
        console.log("answer clicked: ");
    });

    rightOrWrong(isRight);

// });