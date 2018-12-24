/*Challenge

Create a new rand funtion that takes in two arguments,namely min and max, which is a rand number between
min =(inclusive) and max(exclusive)*/

function rand(min,max){
    console.log(Math.floor(Math.random()*(max-min)+min));
}

rand(2,6);

for(let i=0; i<15;i++){
    rand(2,6);
}