//this is the code for the battleship layout
const number_of_boxes_in_row = 10;
const number_of_boxes_in_column = 10;

let box_width, box_height;
let mouseBoard =[];
for(let bx=0 ;bx<10;bx++){
    mouseBoard[bx]=[];
    for(let by=0 ; by<10; by++){
        mouseBoard[bx][by]=false;
    }
}
let board=[];
for(let bx=0 ;bx<10;bx++){
    board[bx]=[];
    for(let by=0 ; by<10; by++){
        Board[bx][by]=false;
    }
}

function setup(){
    createCanvas(500,500);
    box_height = height/number_of_boxes_in_column;
    box_width = width/number_of_boxes_in_row;
    drawGrid();

    
}

function drawGrid(){
    for(let i = 0; i <number_of_boxes_in_row ; i++){
        //const y = 0;

        const x = box_width*i;

        for(let j = 0; j <number_of_boxes_in_row ; j++){
            const y =box_height *j;
        fill('blue');
        rect(x,y,box_width,box_height);
        
        

    }
}

/**
 * Create color fill according to position of box and
 * total number of boxes.
 * @param {Number} i position of box in row
 * @param {Number} y y-coordinate for box in column
 */
/*function customFill(i,y){
    const j = y/box_height;
    fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
}*/
}
const boxHeight= 50
const boxWidth = 50
//When a box is clicked, the box will turn red if the box is part of a "ship"
function mousePressed(){
         let bx = Math.floor(mouseY/boxHeight);
         let by = Math.floor(mouseX/boxWidth);
         mouseBoard[bx][by] =true;
         
    //if([bx][by] ==)
}


    