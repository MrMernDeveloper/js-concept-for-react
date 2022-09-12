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
// console.log(keys);
// console.log(values);

// for 
const numbers = [23, 54, 78, 989, 565];
numbers.forEach(number => console.log(number));
const multipliedNumber = numbers.map(number => number * 2);
// console.log(multipliedNumber);

// for of on array like object
//loop on anj object using for in

// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'Phone', price: 200, brand: 'nokia', color: 'black' },
    { name: 'watch', price: 100, brand: 'Xiomi', color: 'black' },
    { name: 'sunGlass', price: 150, brand: 'husuk', color: 'blue' },
    { name: 'camera', price: 25000, brand: 'samsung', color: 'golden' }
];
const newProduct = { name: 'webcam', price: 700, brand: 'LAL' }

// copy products array and then add  newProduct
const newProducts = [...products, newProduct];
// console.log(newProducts)


//create a new array without one specific item
// remove phone means create a new array without the phone  values
const remaining = products.filter(product => product.name !== 'Phone');
console.log(remaining);


