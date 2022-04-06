//Questão 6

const inverso = function(valor) {
    if(typeof valor == typeof true){
        console.log(!valor)
    }else if(typeof valor == typeof ''){
        console.log("booleano ou número esperados, mas o parâmetro é do tipo string")
    }else if(typeof valor == typeof 1){
        console.log(-valor)
    }
}
inverso("lulu")
inverso(1)
inverso(false)

//Questão 7
