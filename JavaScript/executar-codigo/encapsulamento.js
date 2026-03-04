//pilar - Encapsulamento
class Carro{
    constructor(){
        this.marca = "Gol"
        this.cor = "Vermelho"
    }

    frear(){
        console.log("O carro está freando.")
    }
}

const carro = new Carro();