//////////////////////
// GLOBAL VARIABLES //
//////////////////////
function randomNumber(){
    var rando = Math.random();
    var rando21 = rando*21;
    var randoInteger = Math.floor(rando21);
    console.log(randoInteger);
}

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var text = "";
    for (var i = 0; i < 1; i++)
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    console.log(text);
}

function randomFood(){
    var foods = [
        "pizza",
        "burgers",
        "rice and beans",
        "lasagna",
        "macaroni and cheese",
        "baked potatoes"
    ];
    var randomItem = foods[Math.floor(Math.random()*foods.length)];
    console.log(randomItem);
}

const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];

function randomStudent(){
    const students = [
        "Bob",
        "Martin",
        "Danny",
        "Mahdi",
        "Harry",
        "Sean",
        "Robert"
    ];
    var randomStudent = students[Math.floor(Math.random()*students.length)];
    console.log(randomStudent);
}
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomGroup(){
    const students = [
        "Bob",
        "Martin",
        "Danny",
        "Mahdi",
        "Harry",
        "Sean",
        "Robert"
    ];
    var myNewArray = [];
    for (var i=0; i<3; i++) {
        myNewArray.push(students.splice(Math.random()*(students.length-1),1).pop());
    }
    console.log(myNewArray);
}
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
randomNumber();
randomLetter();
randomFood();
randomStudent();
randomGroup();