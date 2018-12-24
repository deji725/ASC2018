var foods = ["Pizza", "Chicken_Tenders", "Cheeseburger", "more", "stuff"]
foods.push("McChicken");
foods.push("ShakeBurger");

for(let i=0; i<foods.length; i++){
    console.log(foods[i]+" is soooo good!");
}
    console.log(foods);

    for ( const item of foods ){ 
        console.log(item+ " is soooo good!"); 
     }