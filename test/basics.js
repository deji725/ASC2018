let fortnite = 0;
let ps4 = "5";
let john = true;

console.log(fortnite);
console.log(ps4);
console.log(john);

// We're going to earn a profit by reselling tickets
// We bought some tickets to see SZA!
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
let regtick = 45;
let frtick = 75;
let comtick =(regtick * 4 + frtick * 2);
console.log('Cost: ' + comtick);

// we're selling them for 50% more lol.
console.log('Selling price: ' + comtick * 1.5);

// But StubHub, the online ticket selling platform, charges a 20% seller fee...
console.log('Seller fee: ' + comtick * 1.5 * 0.2);

// So here's our total profit:
console.log('Total profit: ' + ((comtick * 1.5)  - (comtick * 1.5 * 0.2) - (comtick)));

let x = 10;
x = x + 2;
x = x + x;
console.log(x);

let pizza = 5;
let burger = 10;
burger = pizza;
pizza++;
burger--;
pizza /= 2;
console.log(pizza);
console.log(burger);

var myArray = ["Hello", 725, "Deji", true];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

var my2ndArray = [];
my2ndArray.push(1);
my2ndArray.push(1.1);
my2ndArray.push(1.2);
console.log(my2ndArray);