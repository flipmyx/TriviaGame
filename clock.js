function startCountdown() {
    console.log("startCountdown called");
    var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 361;

// function reset() {
//   time = 0;

//   $("#countdownDisplay").text("00:60");
// }

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }


function count() {
  time--;

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  // console.log(converted);

  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#clock").text(converted);
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
  return minutes + "-" + seconds;
}
}