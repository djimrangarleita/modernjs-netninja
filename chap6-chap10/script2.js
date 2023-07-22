const people = ['Djimra', 'NGARLEITA', 'legrand', 'success'];

// HTML contenct
const peopleDiv = document.querySelector('.people');
let peopleList = ``;
people.forEach(person => {
    peopleList += `<li>${person}</li>`;
});
peopleDiv.innerHTML = `<ul>${peopleList}</ul>`;

// Get & set attr
let a = document.querySelector('a');
a.setAttribute('href', 'https://mossosouk.com');
a.innerText = 'Mossosouk.com SARL';

// Style
a.style.color = 'magenta'

const pars = document.querySelectorAll('p');

pars.forEach(p => {
    if (p.textContent.includes('success')) p.classList.add('success');
    else if(p.textContent.includes('warning')) p.classList.add('warning');
    else if(p.textContent.includes('error')) p.classList.add('error');    
});

// Appending element
const ul = document.createElement('ul');

people.forEach(person => {
    ul.innerHTML += `<li>${person}</li>`;
})
peopleDiv.append(ul);

// Event listener: event bubbling, event delegation
const todoButton = document.querySelector('button');
const todoUl = document.querySelector('.to-do');

todoButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = "new to do element"
    todoUl.append(li)
});

todoUl.addEventListener('click', e => {
    if(e.target.tagName == 'LI') e.target.remove();
    else console.log('No')
});

// Filter method
const myNums = [10, 30, 15, 25, 40, 5];
const newArray = myNums.filter((num) => num > 15);
console.log(myNums, newArray);
const users = [
    {name: 'NGARLEITA', premium: true},
    {name: 'djimra', premium: false},
    {name: 'legrand', premium: false},
    {name: 'success', premium: true},
];
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);

// Map method 
 const products = [
    {name:'Gold star', price: 20},
    {name:'Mushroom', price:40},
    {name:'green shells', price:30},
    {name:'banana skin', price:10},
    {name:'red shells', price:50},
 ];
  const mappedProducts = products.map(product => {
    if (product.price > 30){
        return {name: product.name, price: product.price/2};
    }
    return product;
 });
 console.log(products);
 console.log(mappedProducts);

 // Reduce method
 const scores = [10, 20, 60, 40, 70, 90, 30];
 const num = scores.reduce((acc, curr) => {
    if (curr>50) {
        acc++;
    }
    return acc
 }, 0);
 console.log(num);

 const players = [
    {name:'mario', score: 50},
    {name:'yoshi', score: 30},
    {name:'mario', score:70},
    {name:'crystal', score:60},
 ];
 const marioScore = players.reduce((acc, curr) => {
    if (curr.name === 'mario') {
        acc+=curr.score;
    }
    return acc;
 }, 0);
 console.log(marioScore);

 // Find method
 const firstFind = scores.find(score => score > 70);
 console.log(firstFind);

//  Sort method
// players.sort((a, b) => {
//     if (a.score > b.score) {
//         return -1;
//     } else if(a.score < b.score) {
//         return 1;
//     } else{
//         return 0;
//     }
// });
players.sort((a, b) => b.score - a.score);
console.log(players);