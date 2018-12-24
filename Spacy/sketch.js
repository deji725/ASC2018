var x = 600;
var y = 700;
 var sbutton;
// var gameStarted = false
var gamestarted = false

    function draw(){
if (gamestarted === false){
        createCanvas(windowWidth,windowHeight);
        background('black');
        textSize(60);
        fill('white');
        text("S P A C E - I N V A D E R S",0,20,windowWidth,windowHeight/3)
        // background('black');
        sbutton = createButton('START');
        sbutton.position(350,450)
        sbutton.size(100,50)
sbutton.mouseClicked(l)
    function l(){
        
            gamestarted = true;
            console.log(gamestarted)
         }
    }
    
else

{
    //function draw() {
        if (keyIsDown(LEFT_ARROW) && x>0){
            x-=10;
        }
        if (keyIsDown(RIGHT_ARROW) && x < 750){
             x+=10;
        }
        clear();
        background('black')
        fill(0, 255, 0);
        rect(x,y,50,50)
}
    }