let height = 600;
let width = 600;

function setup(){
    createCanvas(width, height);
}

var x = width/2;
var y = height/2;
var xspeed =4;
var yspeed =3;

function draw(){
    background(55);
    ellipse(x,y,45,45);
    x = x+xspeed;
    y = y+yspeed;
        if(x<22.5 || x>width-22.5){
            xspeed =-xspeed*1.01;
        }
        if(y<22.5 || y>height-22.5){
            yspeed =-yspeed*1.01;
        }
}
