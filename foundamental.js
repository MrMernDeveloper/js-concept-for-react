//1.  how to declare a variable using let and cosnt
const fatherName = 'Arnold'
let season = 'rainy';
season = 'winter';


//2.  6 basic conditions > , <, ===, <= , >=
//  multiple conditions : &&, ||

if (fatherName === 'arnold' || season === 'rainy') {
    
}
else if (fatherName === 'Arnold') {
    
}
else {
    
}

// 3. array
// index
//length
const numbers = [89, 35, 98, 12]
numbers[0] = 56;

//4. for loop

for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}

// 5. function

function multiply(num1, num2) {
    const result = num1 * num2;
    return result
}

const outPut = multiply(5, 10);


// 6. object
// access property by name
const student = {
    name: 'salib khan',
    age: 32,
    movies: [ 'king khan', 'Dhakar Mastan']
}

const myVariable = 'age'
console.log(student.age)
console.log(student['age'])
console.log(student[myVariable])
