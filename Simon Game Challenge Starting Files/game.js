var buttonColors = [
  "red",
  "blue",
  "green",
  "yellow"
]

let gamePattern = []
let userClickedPattern = []

let level = 0;
var started = false
//store previously pressed colors

$(document).ready (function () {
  $('.btn').click(function() {
    if (started === true) {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length - 1)

    }

  })
  })

// start game
  $(document).keydown(function() {
    if (started === false) {
  nextSequence();
  started = true
  $('h1').text("Level 0")
  }

  })

//random number and animation
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4 )
  let randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)

  playSound(randomChosenColor)

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

  $("h1").text("Level " + level)
  level++;


  userClickedPattern = []
}


//sounds / animation

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $('.' + currentColor).addClass("pressed");
  setTimeout(function (){
    $('.' + currentColor).removeClass("pressed")
  }, 100)
}

//check answers

function checkAnswer(currentLevel) {
if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
  console.log("win")
  if (userClickedPattern.length === gamePattern.length) {

    setTimeout (function () {
    nextSequence()

    }, 1000)
  }
} else {
  console.log("failure")
  playSound("wrong")
  $('body').addClass("game-over")
  setTimeout(function() {
    $('body').removeClass("game-over")
  }, 200)

  $('h1').text("Game Over, Press Any Key to Restart")

  startOver()
}}

function startOver () {
  level = 0
  gamePattern = []
  started = false
}
