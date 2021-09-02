import './CSS/style.css'
import ToDo from "./to_do";
import Project from "./projects";


function displayToDoInput() {
    const openInputBtn = document.querySelector('.openToDoInput')
    openInputBtn.addEventListener('click', () => {
        const addSection = document.querySelector('.addToDoSection')
        addSection.style.display = 'Block'
    })
}  


function createToDo() {
    let item = new ToDo
    let nameInput = document.querySelector('.nameInput')
    let descriptionInput = document.querySelector('.descriptionInput')
    item.setName(nameInput.value)
    item.setDescription(descriptionInput.value)

    let display = document.querySelector('.toDoList');
    let toDoItem =  document.createElement('div');
    toDoItem.classList.add('toDoCard');
    let name = document.createElement('li')
    name.classList.add('name');
    name.textContent = item.name
    let description = document.createElement('li');
    description.classList.add('description');
    description.textContent = item.description
    toDoItem.append(name)
    toDoItem.append(description)
    display.appendChild(toDoItem)
}
let submitBtn = document.querySelector('.addItemBtn')
submitBtn.addEventListener('click', createToDo)

function loadPage() {
    displayToDoInput();
}

export default loadPage;

/*
let one = new ToDo;

one.setName('Take out trash')
one.setDescription('I need to take out the trash so it does not smell.')
console.log(one.name)
console.log(one.description)


let body = document.querySelector('body')
let title = document.createElement('h1')
title.append(one.name)
title.append(one.description)
body.append(title)
*/