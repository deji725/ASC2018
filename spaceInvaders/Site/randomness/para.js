function fun(){
    var sport = process.argv[2]
    console.log(sport + " is fun to play");
}

fun();

function funs(sports){
    console.log(sports + " is so bad");
}

funs("soccer");
funs("badminton");