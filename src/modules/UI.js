import './CSS/style.css'
import ToDo from "./to_do";


let taskList = document.querySelector('.taskList');
taskList = document.querySelector('.taskList');

export default class CreateList {
    constructor(project, projectArr) {
        this.project = project;
        this.projectArr = projectArr;
    }
    addTask() {
        let submitBtn = document.querySelector('.submitTask')
        submitBtn.addEventListener('click', () => {
            let task = new ToDo;
           /*
            let activateForm = document.querySelector('.activateForm')
            activateForm.addEventListener('click', () => {
                let addTaskForm = document.querySelector('.addTaskForm')
                addTaskForm.style.display = 'flex'
            })
            */
            let taskName = document.querySelector('.taskName')
            task.setName(taskName.value)
            localStorage.setItem(`${task.name}`, `${task.name}`)

            let taskCard = document.createElement('div')
            taskCard.classList.add('taskCard')
            let name = document.createElement('li')
            name.classList.add('name')
            name.textContent = task.name

            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('deleteBtn')
            deleteBtn.textContent = 'X'

            taskCard.append(localStorage.getItem(task.name))
            taskCard.append(deleteBtn)
            taskList.append(taskCard)

            //Delete task from local storage and the DOM
            deleteBtn.addEventListener('click', () => {
                localStorage.removeItem(task.name)
                taskCard.style.display = 'None'
            })
            // Reset textbox after submission
            taskName.value = '';
           
        })
    }
}

