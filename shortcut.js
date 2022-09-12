
// truthy or falsy

const money = 800;
let food;
let myvar = 90;
if (money > 100) {
    food = 'briyani';
}
else {
    food = 'ca  biscuit'
}
console.log(food);

let food1 = money > 100 ? 'briyani' : 'ca biskut';
console.log(food1);

let drink = (money > 100 && myvar > 100) ? 'coke' : 'filter water'
console.log(drink);

// shortcut number to string convertion
const num = 51;
const numStr = num + '';
console.log(numStr);
console.log(num);

// string to number

const input = '560';
const inputNumber = + input;
console.log(inputNumber);

let isActive = false;

const showUsers = () => console.log('display user')

const hideUser = () => console.log('hide user');

// isActive ? showUsers() : hideUser();

//use && if the left side is true then right side will executed
 isActive && showUsers();

//  use || if the left side is false then right side will be executed

isActive || hideUser();

//toggle buliyan
isActive = ! isActive







