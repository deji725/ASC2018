// Classes for the Ship, the Aliens, and the Missile

function Ship() {
    this.x = 50;
    this.y = 100;
    this.w = 20;
    this.h = 60;
    this.damage = 0;
    this.ammo = 100;
}

function Alien() {
    this.x = alienX;
    this.y = alienY;
    this.w = 20;
    this.h = 30;
    this.damage = 0;
}

function Missile() {
    this.x = missileX;
    this.y = missileY;
    this.speed = thing
}


// Functions to fill array of Aliens, and check for collisions

function fillArray() {
    aliensArray = new Array(5);

}



/* Initialize variables */

var alien = new Alien()

var aliensArray = new Array(5);





var alien = {

}

var myShip = new Ship();
var alien1 = new Alien();
var alien2 = new Alien();
var alien3 = new Alien();

function setup() {
    createCanvas(500,500);
    background(170);
    for (i=0; i<5; i++) {
        aliensArray[i] = new Alien();
    }
}

function draw() {

    background(170);

    fill(0);
    rect(myShip.x, myShip.y, myShip.w, myShip.h);
    rect(0,0,60,30);
    rect();

    if(keyIsDown(RIGHT_ARROW)) {
        myShip.x += 5;
    } else if (keyIsDown(LEFT_ARROW)) {
        myShip.x -= 5;
    }

    // if(keyIsDown(SPACE)) {
    //     myShip.x -=1;
    // } else if (keyIsDown)
}