let height = 600;
let width = 600;

function setup(){
    createCanvas(width, height);
}

var x = width/2;
var y = height/2;
var value = 'blue'

function draw(){
    background(55);
    rectMode(CENTER);
    fill(value)
    //fill(0, 0, 255);
    rect(x, y, 600, 600);
    
    
   /*if (mouseIsPressed) {
    fill(255, 0, 0);
    rect(x, y, 600, 600);
  }

  print(mouseIsPressed);*/
}  

function mouseClicked() {
    if (value === 'blue') {
      value = 'red';
    } else {
      value = 'blue';
    }
  }