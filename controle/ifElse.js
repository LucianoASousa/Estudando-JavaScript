const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log("Aprovado")
    }else {
        console.log("Reprovado")
    }
}
imprimirResultado(9)
imprimirResultado(6.1)
imprimirResultado(5)
imprimirResultado("oi") //cuidado com a fraca tipagem 
