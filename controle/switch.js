const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("Tu é pika mlk!!")
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(9.9)
imprimirResultado(8.3)
imprimirResultado(6.9)
imprimirResultado(4.1)
imprimirResultado(2.2)
imprimirResultado(1.5)
imprimirResultado(-1)
