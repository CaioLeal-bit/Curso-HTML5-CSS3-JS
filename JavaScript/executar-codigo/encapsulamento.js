//pilar - Encapsulamento
// class Carro{
//     constructor(){
//         this.marca = "Gol"
//         this.cor = "Vermelho"
//     }

//     frear(){
//         console.log("O carro está freando.")
//     }
// }

// const carro = new Carro();

class ContaBancaria{
    constructor(){
        this._numeroConta = 0
        this.saldo = 0
    }

    sacar(valorSaque){
        this.saldo = this.saldo - valorSaque
    }

    depositar(valorDeposito){
        this.saldo = this.saldo + valorDeposito
    }

    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        if(valor >= 0){
            this._saldo = valor
        }
    }

    get numeroConta(){
        return this._numeroConta
    }

    set numeroConta(numero){
        if(numero > 0){
            this._numeroConta = numero + 1
        }
    }
}    

const conta = new ContaBancaria();
conta._numeroConta = 1;