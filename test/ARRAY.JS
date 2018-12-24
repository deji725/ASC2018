var grades = [93, 100, 65, 84, 80];
console.log(grades[1]);
console.log(grades[3]);

const coins = [1, 5, 10, 25, 50];
console.log(coins[0]);
console.log(coins[1]);
console.log(coins[2]);
console.log(coins[3]);
console.log(coins[4]);

var lunchSpecials = [5, 10, 6, 7];
lunchSpecials[0]=(lunchSpecials[0]*2)
console.log(lunchSpecials[0]);
lunchSpecials[1]=(lunchSpecials[1]*2)
console.log(lunchSpecials[1]);
lunchSpecials[2]=(lunchSpecials[2]*2)
console.log(lunchSpecials[2]);
lunchSpecials[3]=(lunchSpecials[3]*2)
console.log(lunchSpecials[3]);

const list1 = [1, 2, 3, 4]; 
//    AFTER: [1, 2, 3, 4, 5]
list1.push(5);

console.log(list1);

const list2 = [1, 2, 3, 4, 5]; 
//    AFTER: [1, 2, 3]
list2.pop();
list2.pop();

console.log(list2);

const list3 = [1, 2, 3, 4, 5]; 
//    AFTER: [7, 6, 1, 2, 3, 4, 5];
list3.unshift(6);
list3.unshift(7);

console.log(list3);

const list4 = [1, 2, 3, 4, 5]; 
//    AFTER: [5, 4, 3, 2, 1];
list4.reverse();

console.log(list4);

var list5 = [1, 2, 3, 4, 5]; 
//    AFTER: [1, 2, 3, 99, 5];
list5[3] = 99;

console.log(list5);

let items = ["Boots of Speed", "Health Potion", "Doran's Blade", "Warding Totem"];
console.log(items.length);

console.log(items.includes("Boots of Speed"));
console.log(items.includes("Lich Bane"));

console.log(items.indexOf('Health Potion'));

console.log(items);


const list = [1,3,4,5,7,8];
list[1] = 5;
let list7 = list.reverse();
console.log(list7);

const x = [4,5,6,7,4,1,1];
x.length; // 7
x.length = 3;
x.length; // 3
console.log(x);