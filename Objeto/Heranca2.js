//Cadeia de protótipos (prototype chain)
Object.prototype.attri0 = 0 // não faça isso em casa

const avo = {attri1 : "A"}
const pai = {__proto__: avo, attri2 : "B"}
const filho = {__proto__:pai, attri3 : "C"}

console.log(filho.attri0, filho.attri1, filho.attri2, filho.attri3)

const carro = {
    velAtual: 0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())