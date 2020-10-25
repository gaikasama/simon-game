var gamePattern = [];

var buttonColors = ["green","red","yellow","blue"];



function nextSequence(){
    $("h1").text("Level " + (gamePattern.length + 1));
    var n = Math.random();
    n = n * 4;
    n = Math.floor(n);
    return n;
}

function displayColor(){
    var randomNumber = nextSequence();
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    var lastGamePattern = gamePattern.length - 1;
    buttonPress(gamePattern[lastGamePattern]);
}


$(document).one("keypress",function(e){
        displayColor();
})

var clickPattern = [];

$("div.btn").click(function(e){
    var clickVal = e.target.id;
    clickPattern.push(clickVal);
    buttonClick(clickVal);
    var index = clickPattern.length - 1;
    validation(clickPattern[index],gamePattern[index]);
})

function validation(answer,input){
    if(answer == input){
        if(gamePattern.length == clickPattern.length){
            displayColor();
            clickPattern = [];
        }
    }else{
        console.log("boboo")
        $("body").addClass("game-over");
        setTimeout(function() {
        $("body").removeClass("game-over");
        },100);
        $("h1").text("Game Over, Press Any Key to Restart");
        wrongAudio.play();
        startAgain();
    }
}


function startAgain(){
    
    $(document).unbind().one("keypress", function(e){
        clickPattern = [];
        gamePattern = [];
        displayColor();
    })
}



// audio

var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

// press
function buttonPress(b){
    switch (b) {
        case "green":
                $("#green").animate({opacity:0},"100",function(){
                    $("#green").animate({opacity:"100%"});
                })
                greenAudio.play();
        break;
        case "red":
            $("#red").animate({opacity:0},"100",function(){
                $("#red").animate({opacity:"100%"});
            })
            redAudio.play();
        break;
        case "yellow":
            $("#yellow").animate({opacity:0},"100",function(){
                $("#yellow").animate({opacity:"100%"});
            })
            yellowAudio.play();
        break;
        case "blue":
            $("#blue").animate({opacity:0},"100",function(){
                $("#blue").animate({opacity:"100%"});
            })
            blueAudio.play();
        break;
    
        default:console.log(b);
            break;
    }
}

// click
function buttonClick(a){
    switch (a) {
        case "green":
            $("#green").addClass("pressed");
            setTimeout(function() {
            $("#green").removeClass("pressed");
            },100);
            greenAudio.play();
        break;
        case "red":
            $("#red").addClass("pressed");
            setTimeout(function() {
            $("#red").removeClass("pressed");
            },100);
            redAudio.play();
        break;
        case "yellow":
            $("#yellow").addClass("pressed");
            setTimeout(function() {
            $("#yellow").removeClass("pressed");
            },100);
            yellowAudio.play();
        break;
        case "blue":
            $("#blue").addClass("pressed");
            setTimeout(function() {
            $("#blue").removeClass("pressed");
            },100);
            blueAudio.play();
        break;
    
        default:console.log(a);
            break;
    }
}

