const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios
        .filter((c)=>{
        return c.pais == 'China' & c.genero == 'F'
    })
        .reduce((acumulador, inicial) => {
        return acumulador.salario < inicial.salario ? acumulador : inicial
    }))
})
