function somaFunction(a = 3, b = 6){
    return a + b;
}

console.log(somaFunction(1)); // <- function  recebendo 1 op. (ela espera 2 op's)

// como Arrow function
const somaArrow = (a = 3, b = 6) => a + b;

console.log(somaArrow(2));