import './CSS/style.css'
import ToDo from "./to_do";
import Project from "./projects";


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
            })\
            */
            let taskName = document.querySelector('.taskName')
            task.setName(taskName.value)

            let taskList = document.querySelector('.taskList');
            let taskCard = document.createElement('div')
            taskCard.classList.add('taskCard')
            let name = document.createElement('li')
            name.classList.add('name')
            name.textContent = task.name;

            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('deleteBtn')
            deleteBtn.textContent = 'X'
            deleteBtn.addEventListener('click', () => {
                taskCard.style.display = 'None'
            })

            taskCard.append(name)
            taskCard.append(deleteBtn)
            taskList.append(taskCard)

            taskName.value = '';
            taskDescription.value = '';
        })
    }
}
let newTask = new CreateList
newTask.addTask();