const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'Phone', price: 200, brand: 'nokia', color: 'black' },
    { name: 'watch', price: 100, brand: 'Xiomi', color: 'black' },
    { name: 'sunGlass', price:150, brand: 'husuk', color: 'blue' },
    { name: 'camera', price: 25000, brand: 'samsung', color: 'golden' }
];
console.log(products);

//map
const brands = products.map(product => product.brand);
// console.log(brands);

// for each
products.forEach(product=> console.log(product.name))
products.forEach(product => console.log(product))

// 3. filter --- using for conditions
const cheap = products.filter(product => product.price <= 5000)
console.log(cheap);
const specialName = products.filter(product => product.name.includes('n'));
console.log(specialName);

const special = products.find(product => product.name.includes('n'));
console.log(special);