//Herança
class Animal{ //Superclasse ou classe pai
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    correr(){
        console.log("correndo.")
    }

    dormir(){
        console.log("dormindo.")
    }
}

class Cao extends Animal{ //Subclasse ou classe filha

    constructor(cor, tamanho, peso, tamanhoOrelha){
        super(cor, tamanho, peso, tamanhoOrelha)
        this.tamanhoOrelha = tamanhoOrelha
    }

    latir(){
        console.log("O cachorro está latindo.")
    }
}

class Passaro extends Animal{ //Subclasse ou classe filha

    constructor(cor, tamanho, peso){
        super(cor, tamanho, peso)
    }

    voar(){
        console.log("O pássaro está voando.")
    }
}

class Papagaio extends Passaro{

    constructor(cor, tamanho, peso, sabeFalar){
        super(cor, tamanho, peso, sabeFalar)
        this.sabeFalar = sabeFalar
    }

    falar(){    
        console.log("O papagaio está falando.")
    }
}

// const animal = new Animal("preta", 10, 5);
// const cao = new Cao("marrom", 20, 10, 5);
// const passaro = new Passaro();
// const papagaio = new Papagaio();
