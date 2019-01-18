// var. constantes
const user = { nome: 'Diego'};

user.nome = 'Cleiton';

console.log(user);

// var. de escolpo

function teste(x){
    let y = 2;

    if (x > 5){
        let y = 4;

        console.log(x, y);
    }
}

teste(10);