//Questão 1

let cumprimentar = function(nome){
    console.log(`Olá, ${nome}!`)
}

cumprimentar('Luciano')

//Questão 2

let anosParaDias = anos => {
    console.log(`${anos} tem ${anos * 365} dias`)
}

anosParaDias(19)

//Questão 3

let salario = (horas, recebe) => {
    console.log(`Salário igual a ${horas * recebe}`)
}

salario(160, 25)

//Questão 4

const meses = [0, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let mesesAno = i => console.log(meses[i])

mesesAno(2)

//Questão 5

let maiorOuIgual = (primeiro, segundo) => {
    console.log(primeiro >= segundo)
}

maiorOuIgual(1, 2)
maiorOuIgual(3, 2)
maiorOuIgual(2, 2)