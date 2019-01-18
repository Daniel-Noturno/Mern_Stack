const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const todasIdades = usuarios.map(item => item.idade);
console.log(todasIdades);

const usuariosRocket = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);
console.log(usuariosRocket);

const encontre = usuarios.find(item => item.empresa === 'Google');
console.log(encontre);

/*
const var1 = usuarios.map(item => item.idade = item.idade *2)
const unindo = usuarios.filter(item => item.idade <= 50);
*/

const unindo = usuarios.map(item =>({...item, idade: item.idade *2})).filter(item => item.idade <= 50);
console.log(unindo);