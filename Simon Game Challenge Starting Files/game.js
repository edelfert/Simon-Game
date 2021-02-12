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
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
    playSound(userChosenColor)
    animatePress(userChosenColor)
  })
  })

//random number and animation
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4 )
  let randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)

  playSound(randomChosenColor)

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

  level++;
  $("h1").text("Level " + level)
}


//sounds, animation, game start

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

$(document).keydown(function() {
  if (started === false) {
nextSequence();
started = true
$('h1').text("Level 0")
}

})
