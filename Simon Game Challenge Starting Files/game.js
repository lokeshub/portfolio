// alert("hi");
// has the game started already
var started = false;

// Level set to zero
var level = 0;

// All the buttons
var buttonColours = ["red", "blue", "green", "yellow"];

// Pattern maintained by game
var gamePattern = [];

// Pattern clicked by user
var userClickedPattern = [];

// Start a level
function nextSequence() {
  level = level + 1;
  $("#level-title").text("Level "+ level);

  userClickedPattern = [];

  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);

  var randomChosenColor = buttonColours[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(userChosenColor) {
  var audio = new Audio("sounds/" + userChosenColor + ".mp3");
  audio.play();
}

// Check each time user clicks
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    // check if whole sequence is right
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");

    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();

    // Show game over on screen
    $(document).addClass("game-over");
    setTimeout(function() {
      $(document).removeClass("game-over");
    }, 200);

    // Start game again
    $("h1").text("Game Over at "+level+", Press A Key to Restart")
    startOver();
  }
}

// When a key is pressed
function animatePress(currentColor) {
  $("."+currentColor).addClass("pressed");
  setTimeout(function() {
    $("."+currentColor).removeClass("pressed");
  }, 100);
}

// Reset all on Restart
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  $(".start-btn").show();
}

// Set event on button clicks
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);

  console.log("User: "+ userClickedPattern);
  console.log("Game: "+gamePattern);
  checkAnswer(userClickedPattern.length - 1);
});

// Start by clicking header
$("#level-title").click(function() {
  startOver();
});

// Set event on keypress
$(document).keypress(function() {
  if (!started) {
    nextSequence();
    started = true;
    $(".start-btn").hide();
  }
});

// Do same with start click
$(".start-btn").click(function() {
  if (!started) {
    nextSequence();
    started = true;
    $(".start-btn").hide();
  }
});
