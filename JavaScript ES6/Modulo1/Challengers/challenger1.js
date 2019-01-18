class Usuario{
    constructor(data1, data2){
        this.email = data1;
        this.senha = data2;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(data1, data2){
        super();

        this.email = data1;
        this.senha = data2;
        this.admin = true;
    }    
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1);
console.log(Adm1);