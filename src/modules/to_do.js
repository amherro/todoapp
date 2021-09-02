export default class ToDo {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name
    }
    setDescription(description) {
        this.description = description
    }
    getDescription() {
        return this.description
    }
}

