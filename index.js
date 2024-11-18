console.log('Hello from Node');

console.log(0.1 + 0.2);

const sum = (...nums) => nums.reduce((acc, num) => acc + num);

const numbers = [5, 7, 8, 9, 10, -500];

console.log(sum(...numbers));
