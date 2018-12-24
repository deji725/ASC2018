function setup(){
    createCanvas(500,500);
    background(225);
    
    strokeWeight(10);
    
    //outermost circle
    ellipse(250, 250, 400, 400); //ellipse(x,y,width,height)//
    
  //half circle
  fill(255, 0, 0);
  arc(250, 250, 400, 400, PI, 0);
  noFill();

    //draw line
    line(50, 250, 450, 250);
  

  //middle circle
  fill(255);
  ellipse(250, 250, 100, 100);
  noFill(0);

   //center circle
   fill(0);
   ellipse(250, 250, 50, 50);

}
