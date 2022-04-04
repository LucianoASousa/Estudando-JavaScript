const produtos = [
    {nome :' Notebook', preco: 2499, fragil: true},
    {nome :'iPad Pro', preco: 4199, fragil: true},
    {nome :'Copo de Vidro', preco: 12.49, fragil: true},
    {nome :'Copo de Plástico', preco: 18.99, fragil: false}
]
// primeiro exemplo
console.log(produtos.filter(function(p){
    return p.fragil === true & p.preco > 500
}))
// segun
const produtoCaro = valor => valor.preco >= 500
const produtoFragil = quebra => quebra.fragil

const resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado)