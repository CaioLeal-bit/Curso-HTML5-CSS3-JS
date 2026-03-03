//Pilar 1 - Abstração
/*
Modelo, Identidade, Entidade (Oficina, Mecânico, Cliente)
Características(marca, modelo, cor) e Ações
*/ 

class Carro{
    constructor(){
        this.marca = "Fiat";
        this.modelo = "Uno";
        this.cor = "Vermelho";
        this.placa = "ABC-1234";
    }
    ligar(){
        console.log("O carro está ligado.");
    }
}

const carro = new Carro();
carro.modelo = "Palio";
console.log(carro.modelo);

//Loja Virtual
class Produto{
        constructor(){
            this.tamanho = "M";
            this.cor = "Preto";
            this.preco = "99,90";
        }
    }