function random(sport) {
    var rando = Math.random();
    var rando21 = rando*sport;
    var randoInteger = Math.floor(rando21);
    console.log(randoInteger);
}

random(10);
random(100);
random(2);

function randomLetter(alphabet){
    var randos =Math.random();
    var randos1 = randos*alphabet.length;
    var randoIntegers = Math.floor(randos1);
    console.log(alphabet[randoIntegers]);
}

randomLetter("blah"); // "b"
randomLetter("abcdefg"); // "g"
randomLetter("z"); // "z"

/*for(let i=0;i<15;i++){
    randomLetter("blah");
}*/

function myGuy(quote){
    var randm =" ,my guy"
    console.log(quote+randm);   
}

myGuy("Take it easy"); // "Take it easy, my guy"

function string_N_times(one,two){
    for(let i=0;i<two;i++){
        console.log(one);
    }
}

string_N_times("Hello",6);

function hypotenuse(a,b){
    console.log(Math.sqrt((a*a)+(b*b)));
}

hypotenuse(5,12); // 5


