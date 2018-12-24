function setup(){
    createCanvas(500, 300);
    background(55);
}

let x=1;





function draw(){
    background(255);
    let y= Math.sin(0.1*x)*100;
    ellipse(x,y,10,10);
    x++;
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    fill(hue);
}