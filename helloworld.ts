let message : string = "Hello world";
// create a new heading 1 element 
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);