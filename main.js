var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];

var squares = document.querySelectorAll(".square");
var colorToGuess = document.querySelector("#colorToGuess");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1")

colorToGuess.textContent = generateColor();

squares[Math.floor(Math.random()*squares.length)].style.backgroundColor = colorToGuess.textContent;



for(i in squares){
    
    if(squares[i].style.backgroundColor !== colorToGuess.textContent){
        squares[i].style.backgroundColor=generateColor(); 
    }
    
    squares[i].onclick = function(){
        if(this.style.backgroundColor === colorToGuess.textContent){
            messageDisplay.textContent = "Correct!!!";
            h1.style.backgroundColor = this.style.backgroundColor;
            changeColors(this.style.backgroundColor);
            
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent = "Try again...";
        }        
    }
}

function changeColors(color){
    for(i in squares){
        squares[i].style.backgroundColor=color;
    }
}

function generateColor(){
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}