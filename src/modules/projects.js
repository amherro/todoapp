import ToDo from './to_do';

export default class Project {
    constructor(title) {
        this.title = title;
        this.projects = [];
    }
    setProjectName(title) {
        this.title = title;
        this.projects.push(title)
        return this.title
    }
    
    changeProjectName(i, title) {
        this.projects[i] = title
    }
}

