//  convert to  JSON 

const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const studentJson = JSON.stringify(student);
console.log(studentJson);
const studentObj = JSON.parse(studentJson)
console.log(studentObj);

// 2. fetch
/*

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));
    */

//keys, values

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

// for 
const numbers = [23, 54, 78, 989, 565];
numbers.forEach(number => console.log(number));
const multipliedNumber = numbers.map(number => number * 2);
console.log(multipliedNumber);
