Object.prototype

const obj = {

}

console.log(obj.toString())
console.log(obj.__proto__ == Object.prototype) // true

//----------------------------------------------------

class Carro {
    constructor(){
        this.placa = 'ABC-1234'
    }
}

class Bmw extends Carro {
    constructor(){
        super()
        this.nome = 'BMW 320i'
    }
}

const carro = {
    placa: 'ABC-1234',
    acelerar : function(){
            console.log('Acelerando...')
    }
}

const bmw = {
    nome: 'BMW 320i',
    __proto__: carro
}

console.log(bmw.placa) // ABC-1234
bmw.acelerar()

// const objBmw = new Bmw()
// console.log(objBmw.placa) // ABC-1234
// console.log(objBmw.nome) // BMW 320i