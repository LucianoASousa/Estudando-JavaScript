const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

const TimePokemon = ['Inferneap', 'Gastrodon', 'Lucario', 'Garchomp', 'Glisgor', 'Espeon']
TimePokemon.forEach((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)
})
// Os parametros do callback são: nome, indice e array, nessa ordem.