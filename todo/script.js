const addTodoForm = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const filterTodoInput = document.querySelector('.filter-todo');

const createTodoItem = (todoItem) => {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${todoItem}
            <i class="bi bi-trash delete"></i>
        </li>
    `;
}

addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoItem = addTodoForm.addtodo.value.trim();
    if(todoItem) todoList.innerHTML += createTodoItem(todoItem);
    addTodoForm.reset();
});

todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) e.target.parentNode.remove();
});

const filteredTodo = (searchTerm => {
    return Array.from(todoList.children).filter(todo => {
        todo.classList.remove('d-none');
        return !todo.textContent.toLowerCase().includes(searchTerm.toLowerCase());
    }).map((filteredItem) => filteredItem.classList.add('d-none'));
});

filterTodoInput.addEventListener('keyup', e => filteredTodo(e.target.value.trim()));

