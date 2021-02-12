var buttonColors = [
  "red",
  "blue",
  "green",
  "yellow"
]

let gamePattern = []

let userClickedPattern = []


//store previously pressed colors

$(document).ready (function () {
  $('.btn').click(function() {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
    console.log("test")
  })
  })

//random number and animation
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4 )
  let randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

}

nextSequence();
