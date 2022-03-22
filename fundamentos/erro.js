 function tratarErroELancar(erro){
     throw{
         nome:erro.name,
         msg:erro.message,
         date: new Date
     }
 }
 
 function imprimirNomeGritando (Obj) {
     try {
         console.log(Obj.name.toUpperCase()+"!!!")
     }catch (e) {
        tratarErroELancar(e)
     }finally {
         console.log('fim')
     }
 }

 const Obj = {nome: "Roberto"}
 imprimirNomeGritando(Obj)

