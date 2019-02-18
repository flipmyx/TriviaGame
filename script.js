$(document).ready(function() {

    var correctTally = 0;
    var wrongTally = 0;
    var winTally = 0;
    var loseTally = 0;

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
        $("#displayArea").hide;
        // $("#clock").hide;
        // $("#questionCard").hide;
    
        var buttonz = $("<button>");
        buttonz.addClass("btn btn-outline-success btn-lg btn-block barcodefont fontL startbutton");
        buttonz.attr("style", "padding: 10% 0");
        buttonz.text("LETS GET STARTED");
        $("#startButton").append(buttonz);
    };

    
    function gameOver() {
        $("#startButton").hide;
        $("#clock").hide('slow');
        $("#questionCard").text("");
        $("#gameOver").text("GAME OVER!");
    }
    
    startButton();
    
    function questionCard() {

    var questionz = $("<div>").addClass("btn btn-info btn-block jeopardyfont fontR");
    questionz.text(questions[0].question);
    $("#questions").append(questionz);
    var preguntas1 = $("<div>").addClass("btn btn-primary btn-block jeopardyfont fontR");
    $("#questions").append(preguntas1);
    preguntas1.text(questions[0].incorrect_answers[0]);
    var preguntas2 = $("<div>").addClass("btn btn-primary btn-block jeopardyfont fontR");
    $("#questions").append(preguntas2);
    preguntas2.text(questions[0].incorrect_answers[1]);
    var preguntas3 = $("<div>").addClass("btn btn-primary btn-block jeopardyfont fontR");
    $("#questions").append(preguntas3);
    preguntas3.text(questions[0].correct_answer);
    var preguntas4 = $("<div>").addClass("btn btn-primary btn-block jeopardyfont fontR");
    $("#questions").append(preguntas4);
    preguntas4.text(questions[0].incorrect_answers[2]);
    }
    
    $("#startButton").click(function() {
        console.log("start clicked");
        startCountdown();
        setTimeout(gameOver, 60000);
        $("#startButton").hide('slow');
        $("#clock").show('slow');
        questionCard();
    
    });

});