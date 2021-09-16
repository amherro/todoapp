export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
    setProjectName(title) {
        this.title = title;
    }
    getProjectName() {
        return this.title
    }
    setTaskName(tasks) {
        this.tasks = tasks
    }
    getTaskName() {
        return this.tasks
    }
    addTask(newTask) {
        this.tasks.push(newTask)
    }
}

