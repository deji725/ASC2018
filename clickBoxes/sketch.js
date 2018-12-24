let height = 600;
let width = 600;

function setup(){
    createCanvas(width, height);
}

var x = width/2;
var y = height/2;
var value = 'blue'
var value1 = 'blue'

function draw(){
    background(55);
    rectMode(CENTER);
    fill(value)
    //fill(0, 0, 255);
   rect(0,0,600,1200);
   noFill();

   fill(value1);
   rect(600,600,600,1200);
    
    
   /*if (mouseIsPressed) {
    fill(255, 0, 0);
    rect(x, y, , 600);
  }

  print(mouseIsPressed);*/
}  

function mouseClicked() {
    if(mouseX>=0 && mouseX<=x && mouseY >=0 && mouseY <y){
        if (value === 'blue') {
            value = 'red';
          } else {
            value = 'blue';
          }
          rect(0,0,600,1200);
    }
    if(mouseX >=x && mouseX <=1200 && mouseY >y && mouseY <=600){
        if (value1 === 'blue') {
         value1 = 'red';
        } else {
        value1 = 'blue';
         }
         rect(600,600,600,1200);
}
   
}