//Armazenando um funcao dentro de um variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel

const soma = (a,b) => {
    return console.log(a + b) 
}
soma(5,6)

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(1, 2))