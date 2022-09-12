const student = {
    name : {username: 'rakib', age:25}
}
// console.log()
const username  = student.name.username
console.log(username);

const array = [10, 20];
const [first, second] = array;
console.log(first)


function boxyFy(number1, number2) {
    const newArray = [number1, number2];
    return newArray

}

// console.log(boxyFy(5, 10)); 
const [firstNumber, secondNumber] = boxyFy(5, 10);

// console.log(firstNumber)

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { brand } = employee.specification.watch;
console.log(brand);

const { height, weight } = employee.specification;

console.log(height);

const [firstLanguage] = employee.language;
console.log(firstLanguage)
