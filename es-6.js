const numbers = [89, 35, 98, 12];
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// 1. template string
const about = ` My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`
console.log(about);

// 2. arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator

const newNumbers = [...numbers, 55];
console.log(newNumbers);
