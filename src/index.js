import CreateList from "./modules/UI"

let taskList = document.querySelector('.taskList');
taskList = document.querySelector('.taskList');

window.addEventListener('load', () => {
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

let newTask = new CreateList
newTask.addTask();

