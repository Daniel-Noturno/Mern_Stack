class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List {
    constructor() {
        super();

        this.usuario = "Diego";
    }

    mostrauser() {
        console.log(this.usuario);
    }
}

const MinhaLista = new ToDoList();

document.getElementById('novotoDo').onclick = function() {
    MinhaLista.add('Novo ToDo');
}

class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));