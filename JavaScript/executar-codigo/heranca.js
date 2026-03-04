//Herança
class Animal{ //Superclasse ou classe pai
    constructor(){
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }

    correr(){
        console.log("correndo.")
    }

    dormir(){
        console.log("dormindo.")
    }
}

class Cao extends Animal{ //Subclasse ou classe filha

    constructor(){
        super()
        this.tamanhoOrelha = 0
    }

    latir(){
        console.log("O cachorro está latindo.")
    }
}

class Passaro extends Animal{ //Subclasse ou classe filha
    
    voar(){
        console.log("O pássaro está voando.")
    }
}

class Papagaio extends Passaro{

    falar(){    
        console.log("O papagaio está falando.")
    }
}

const cao = new Cao();
const passaro = new Passaro();
const papagaio = new Papagaio();
