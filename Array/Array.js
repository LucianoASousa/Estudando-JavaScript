console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
// Notação literal de array
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
// adicionando elementos
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
// adicionando elementos futuros
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
//sort, organiza o array de outra forma
console.log(aprovados)
aprovados.sort()
console.log(aprovados)
//excluindo elementos
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
//splice
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 2)
console.log(aprovados)