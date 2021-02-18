let button = document.getElementById('btn');
let todocontainer = document.getElementById('todocontainer');
let inputField = document.getElementById('text');

button.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('para-style');
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click',function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function () {
        todocontainer.removeChild(paragraph)
    })
})