
function setup(){
    createCanvas(600,600);
    background('aqua');
}
var rows = 10;
var columns = 10;
var squareSize = 1;
var column=['','','','','','','','','',''];
for (let i=0;i<columns;i++) {
     column[i]=[];
    for (let j=0;j<rows;j++){
        column[i].push(false);
        
    }
}
let smallShipX = Math.floor(Math.random()*9);
let smallShipY = Math.floor(Math.random()*10);
let bigShipX = Math.floor(Math.random()*10);
let bigShipY = Math.floor(Math.random()*8);


function draw(){
    column[smallShipX][smallShipY]=true;
    column[smallShipX+1][smallShipY]=true;
    column[bigShipX][bigShipY]=true;
    column[bigShipX][bigShipY+1]=true;
    column[bigShipX][bigShipY+2]=true;       
    grid();
}
function grid(){
//Vertical Lines of Grid    
    for(let i=0; i<11;i++){
    line(i*50,0,i*50,500);
    }
//Horizontal lines of Grid
    for(let i=0; i<11;i++){
        line(0,i*50,500,i*50);
    }
}
function ship(x,y){
    fill(105);
    rect(x*50,y*50,100,50);    
}
function selectSquares(x,y,i,j){
 if(mouseX>(x*50)&&mouseX<(x*50)+50&&mouseY>(y*50)&&mouseY<(y*50)+50){
    if(column[i][j]===false){
        fill('blue');                
        rect((x*50),(y*50),50,50);
    }
    else{
        console.log('hit');
        fill('red')        
        rect((x*50),(y*50),50,50);                            
        
    }
 }
}

function mouseReleased() {
  for (let j = 0; j < 10; j++) { //Y of tiles
        for(let i = 0;i < 10;i++) {  //X of tiles
        selectSquares(i,j,i,j);
        }
  }
}





    