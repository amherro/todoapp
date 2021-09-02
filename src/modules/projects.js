import ToDo from './to_do';

export default class Project {
    constructor(title) {
        this.title = title;
        this.projects = [];
    }
    addNewProject(title) {
        this.projects.push(title);
        return this.projects
    }
    changeProjectName(i, title) {
        this.projects[i] = title
    }
}

