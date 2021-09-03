import './CSS/style.css'
import ToDo from "./to_do";
import Project from "./projects";

const createList = () => {
    let taskDisplay = document.querySelector('.taskDisplay')
    let project = new Project;
    let projectsArr = [];
    function addProject() {
        const projectNameInput = document.querySelector('.projectName')
        project.setProjectName(projectNameInput.value)
        projectsArr.push(project.title)
        //console.log(projectsArr)
        
        let projectDisplay = document.querySelector('.projectList')
        // Make each project a button, and when clicked it will display the associated to do's
        let newProject = document.createElement('button')
        newProject.classList.add('newProjectCard')
        let projectTitle = document.createElement('h3')
        projectTitle.textContent = project.title;
        newProject.append(projectTitle);
        projectDisplay.append(newProject);
        projectNameInput.value = '';
        
        let displayTasks = () => {
            newProject.addEventListener('click', () => {
                function displayToDoInput() {
                    let itemDisplay = document.createElement('main')
                    itemDisplay.classList.add('itemDisplay')
                    let toDoTitle = document.createElement('h2')
                    toDoTitle.classList.add('toDoTitle')
                    let toDoSection = document.createElement('div')
                    toDoSection.classList.add('toDoSection');
                    let inputTitle = document.createElement('h3')
                    inputTitle.textContent = 'Add a New Item'
                    let nameInput = document.createElement('input')
                    nameInput.classList.add('nameInput')
                    nameInput.type = 'text'
                    let descriptionInput = document.createElement('input')
                    descriptionInput.classList.add('descriptionInput')
                    let addItemBtn = document.createElement('button')
                    addItemBtn.classList.add('addItemBtn')
                    addItemBtn.textContent = '+'
                    itemDisplay.append(toDoTitle);
                    itemDisplay.append(toDoSection);
                    itemDisplay.append(inputTitle);
                    itemDisplay.append(nameInput);
                    itemDisplay.append(descriptionInput);
                    itemDisplay.append(addItemBtn);

                    taskDisplay.append(itemDisplay)

                    itemDisplay.classList.add(`${project.title.replace(/\s+/g, '')}`)
                    console.log(itemDisplay.classList)
                    if(itemDisplay.classList.contains(project.title.replace(/\s+/g, ''))) {
                        itemDisplay.style.display = 'Block'
                    }
                    addItemBtn.addEventListener('click', () => {
                        function createToDo() {
                            let item = new ToDo
                            let nameInput = document.querySelector('.nameInput')
                            let descriptionInput = document.querySelector('.descriptionInput')
                            item.setName(nameInput.value)
                            item.setDescription(descriptionInput.value)
                        
                            let display = document.querySelector('.taskDisplay');
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
                            display.append(toDoItem)
                            nameInput.textContent = '';
                            descriptionInput.textContent = '';
                        }
                        let submitBtn = document.querySelector('.addItemBtn')
                        submitBtn.addEventListener('click', createToDo);
        
                    })
                    
                }
                displayToDoInput();
           
                
            })
        }
        displayTasks();
    }
    addProject()
}

let submitProjectBtn = document.querySelector('.addProjectBtn')
submitProjectBtn.addEventListener('click', createList);

function loadPage() {
    
}

export default loadPage;