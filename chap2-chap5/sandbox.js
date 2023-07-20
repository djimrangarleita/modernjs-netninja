let email = 'dngarleita@gmail.com'
let uname = 'Djimra NGARLEITA'

let result = `The email address of ${uname} is ${email}`;

console.log(result.includes('z'));

greet('Djimra');
// Function declaration: Hoisting applies
function greet(name){
    console.log(`Hello ${name}`);
} 

// Function expression no Hoisting
const speak = (name) => console.log(`${name} is speaking`);
speak('Djimra');

// Arrow func
const calcCircArea = radius => 3.14 * radius**2;
console.log(calcCircArea(5));

const persons = ['Djimra', 'NGARLEITA', 'legrand', 'success'];

// forEach is a method that takes a callback as param
persons.forEach(person => console.log(person));

// JS Primitive types: stack
`strings
numbers
Booleans
null
undefined
symbols`

// References types: heap
`objects: arrays, func, etc.`