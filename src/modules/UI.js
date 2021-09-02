import ToDo from "./modules/to_do";
import Project from "./projects";

function createToDo(item) {
    item = new ToDo;
     
}


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
