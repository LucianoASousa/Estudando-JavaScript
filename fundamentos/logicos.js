function compras(trabalho1, trabalho2) {
    const comprarSwitch = trabalho1 || trabalho2
    const comprarGeladeira = trabalho1 && trabalho2
    //const comprarcel = !!(trabalho1 ^ trabalho2)//bitwise xor
    const comprarFigobar = trabalho1 != trabalho2
    const ficarSemJogar = !comprarSwitch

    return {comprarSwitch, comprarGeladeira, comprarFigobar, ficarSemJogar }
}

console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(true, true))
console.log(compras(false, false))
