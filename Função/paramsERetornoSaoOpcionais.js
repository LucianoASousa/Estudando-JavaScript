
//essa casa não pode ter mais de 101m²
function area(largura, altura) {
    const area = largura * altura
    if (area >= 101) {
        console.log(`${area}m² é um tamanho invalido!`)
    } else { 
        return console.log(`Sua casa tem uma area de ${area}m².`)
    }
}
area(21, 2)
