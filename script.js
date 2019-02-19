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


var corrects = questions.map(function (cards) {
        return cards.correct_answer;
    });
console.log(corrects);


function getWrongAns() {
    var wrongs = questions.map(function (cards) {
        return cards.incorrect_answers;
    });
    return wrongs;
}



// $(document).ready(function() {

    var correctTally = 0;
    var wrongTally = 0;
    var questionsLeft = 10;
    var questionNum = 0;
    
    

    function checkAnswer(answered) {        
            console.log("checkAnswer() answered is: " + answered);
            letsee = corrects.includes(answered);
            console.log("letsee is: " + letsee);
            if (letsee === true) {
                console.log("Correct!");
                correctTally++;
                console.log("correctTally: " + correctTally);
                console.log("wrongTally: " + wrongTally);          
                questionNum++;
                questionsLeft--;
                console.log("questionNum: " + questionNum + " questionsLeft: " + questionsLeft);
                questionCard(questionNum, correctTally, wrongTally, questionsLeft);

            } else {
                console.log("Wrong!");
                wrongTally++;
                console.log("correctTally: " + correctTally);
                console.log("wrongTally: " + wrongTally);        
                questionNum++;
                questionsLeft--;
                console.log("questionNum: " + questionNum + " questionsLeft: " + questionsLeft);
                questionCard(questionNum, correctTally, wrongTally, questionsLeft);
            }
    };


    function gameOver() {
        $("#clock").hide('slow');
        $("#displayArea").hide('slow');
        $(".logobar").hide('slow');
        $("#promptz").text("Thanks for Playing");
        $("#gameOver").addClass("bg-success");
        $("#biglogo").show();
        $("#winz").text("Correct Answers: " + correctTally);
        $("#lozzez").text("Wrong Answers: " + wrongTally);
        $("#gameOver").removeClass("d-none");

    }

    function timesUp() {
        $("#clock").hide('slow');
        $("#displayArea").hide('slow');
        $(".logobar").hide('slow');
        $("#promptz").text("Times Up");
        $("#gameOver").addClass("bg-danger");
        $("#biglogo").show();
        $("#winz").text("Correct Answers: " + correctTally);
        $("#lozzez").text("Wrong Answers: " + wrongTally);
        $("#gameOver").removeClass("d-none");
    }
    
    function questionCard(arrIndx, correctz, wrongz, qleftz) {
        console.log("arrIndx is: " + arrIndx);
        if (arrIndx <= 9 ) {
            $("#questions").empty();
            var questionz = $("<div>").addClass("bg-info block mb-1 jeopardyfont fontR text-center");
            questionz.text(questions[arrIndx].question);
            $("#questions").append(questionz);
            var preguntas1 = $("<div>").addClass("btn btn-primary btn-lg btn-block jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas1);
            preguntas1.text(questions[arrIndx].incorrect_answers[0]);
            var preguntas2 = $("<div>").addClass("btn btn-primary btn-lg btn-block jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas2);
            preguntas2.text(questions[arrIndx].incorrect_answers[1]);
            var preguntas3 = $("<div>").addClass("btn btn-primary btn-lg btn-block jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas3);
            preguntas3.text(questions[arrIndx].correct_answer);
            var preguntas4 = $("<div>").addClass("btn btn-primary btn-lg btn-block jeopardyfont fontR text-center rounded ansbutton ans1");
            $("#questions").append(preguntas4);
            preguntas4.text(questions[arrIndx].incorrect_answers[2]);

            $("#qremain").text(qleftz);
            $("#correctDisp").text(correctz);
            $("#incorrectDisp").text(wrongz);

            $(".ansbutton").click(function() {
                var answer = $(this).text();
                console.log(answer);
                checkAnswer(answer);

            });
        } else {
            gameOver();
        }
    };

    questionCard(questionNum);
    
    $("#startButton").click(function() {
        console.log("start button clicked");
        startCountdown();
        setTimeout(timesUp, 361000);
        $("#startButton").hide('slow');
        $("#biglogo").hide();
        $("#clock").removeClass('d-none');
        $("#questions").removeClass('d-none');
        $(".logobar").removeClass('d-none');
    });


// });