import './CSS/style.css'
import ToDo from "./to_do";
import Project from "./projects";

//taskList.textContent = localStorage.getItem('This is a test')
let taskList = document.querySelector('.taskList');
taskList = document.querySelector('.taskList');

window.addEventListener('load', () => {
    /*for(let i in localStorage) {
        taskList.textContent = localStorage[i];
    }
    */
   (Object.keys(localStorage)).forEach((key) => {
       let oldTask = document.createElement('div')
       oldTask.classList.add('taskCard')
       let oldTaskName = document.createElement('li')
       oldTaskName.classList.add('name')
       oldTaskName.textContent = localStorage[key]
       let oldDeleteBtn = document.createElement('button')
       oldDeleteBtn.classList.add('deleteBtn')
       oldDeleteBtn.textContent = 'X'
       oldDeleteBtn.addEventListener('click', () => {
            localStorage.removeItem(key)
            oldTask.style.display = 'None'
        })
       oldTask.append(oldTaskName)
       oldTask.append(oldDeleteBtn)
       taskList.append(oldTask);
   })
})

export default class CreateList {
    constructor(project, projectArr) {
        this.project = project;
        this.projectArr = projectArr;
    }
    /*
    loadTasks() {
        let taskList = document.querySelector('.taskList')
        let taskCard = document.createElement('div')
        taskCard.classList.add('taskList')
        let name = document.createElement('li')
        name.classList.add('name')
        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.textContent = 'X'
        taskCard.append(name)
        taskCard.append(deleteBtn)
        taskList.append(taskCard)

        for(i = 0; i < localStorage.length; i++) {
            name = JSON.parse(localStorage.getItem(key))
        }
    }
    */
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

            for(let i = 0; i < localStorage.length; i++) {
                name = (localStorage.getItem(`${task.name}`))
            }
           
        })
    }
}
let newTask = new CreateList
newTask.addTask();