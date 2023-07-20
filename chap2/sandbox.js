let email = 'dngarleita@gmail.com'
let uname = 'Djimra NGARLEITA'

let result = `The email address of ${uname} is ${email}`;

console.log(result.includes('z'));

greet('Djimra');
// Function declaration: Hoisting apply
function greet(name){
    console.log(`Hello ${name}`);
}

// Function expression no Hoisting
const speak = (name) => console.log(`${name} is speaking`)
speak('Djimra');