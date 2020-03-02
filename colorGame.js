var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square'); 
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetBtn = document.getElementById('reset');
var modeBtn = document.querySelectorAll('.mode');

init();

function init(){
    setUpModeBtn();
    setUpSquares();
    reset();
}

function setUpModeBtn(){
    for(var i=0; i<modeBtn.length; i++){
        modeBtn[i].addEventListener('click', function(){
            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6; //using ternary operator 
        
            reset();
        })
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        //add click listener to squares
        squares[i].addEventListener('click', function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                h1.style.backgroundColor = clickedColor;
                messageDisplay.textContent = 'Correct!';
                changeColors(clickedColor);
                resetBtn.textContent = 'Play again';
            }else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try again';
            }
        })
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
    }
    //reset h1 backgroundColor
    h1.style.backgroundColor = '#232323';
    messageDisplay.textContent = '';
    resetBtn.textContent = 'New Colors';
}

resetBtn.addEventListener('click', function(){
    reset();
})

function changeColors(color){
    //loop through all squares
    for(var i = 0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color; 
    }
}

function pickColor(){
    //pick a random color
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times 
    for (var i=0; i<num ; i++){
        //get random color and push it into array
        arr.push(randomColor()); 
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var red = Math.floor(Math.random()*256);
    //pick a green from 0-255
    var green = Math.floor(Math.random()*256);
    //pick a blue from 0-255
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}