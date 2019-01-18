// REST

const user = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = user;

console.log(nome);
console.log(resto);

// em vetor
const array = [1, 3, 5, 7];

const [ a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

// em funções
function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(2,4,5));

// SPREAD

const arr1 = [0, 9, 8];
const arr2 = [4, 2, 3];
const arr3 = [ ...arr1, ...arr2];

console.log(arr3);

const user2 = { ...user, nome: 'Noturno', empresa: 'Debugger Master'};

console.log(user2);