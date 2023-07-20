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