function tomatoer(crust, cheese, toppings){
    crust = process.argv[2];
    cheese = process.argv[3];
    toppings = process.argv[4];
    if(crust == "Deep"){
        console.log("Go back to Chicago, you disgusting person");
    } 
    if(cheese == "chedder"){
        console.log("Scum of the Earth");
    }
    if(cheese == "nothing" && toppings.length == 0){
        console.log("You should have gone to the bakery.");
    }
    for(let i=0; i<toppings.length; i++) {
        var item = toppings[i];
        if(item == "pineapple"){
            console.log("Go to the abyss");
        }
    }

}


tomatoer("Deep", "chedder", ["pineapple","anchovies"]);