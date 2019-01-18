var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var bntElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_toDos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    listElement.innerHTML = '';

    for (todo of toDos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = toDos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo('+ pos +')');

        var linkText = document.createTextNode('Excluir!');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

function addTodo(){
    var todoText = inputElement.value;

    toDos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

function deleteToDo(i){
    toDos.splice(i,1);
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_toDos', JSON.stringify(toDos));
}

renderTodos();

bntElement.onclick = addTodo;