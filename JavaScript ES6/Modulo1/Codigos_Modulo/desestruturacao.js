const user = {
    nome: 'Igor',
    idade: 37,
    endereço: {
        cidade: 'Rio do Brasil',
        estado: 'Bam Bam',
    },
};

const { nome, idade , endereço: { cidade } } = user;

console.log(nome);
console.log(idade);
console.log(cidade);

// como funç
function mostrandoNome( { nome, idade } ) {
    console.log(nome, idade);
}

mostrandoNome(user);