//Notação Literal
/*
const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        console.log("Disponíveis: " + res)
    }
}
*/

//Notação de construtor
/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
        let res = this.quartos - this.ocupados
        console.log("Disponíveis: " + res)
    }

    console.log(hotel.quartos)
    hotel.verificarDisponibilidade()
*/

//Criando classes
class Hotel{

    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }

    verificarDisponibilidade(){
        let res = this.quartos - this.ocupados
        console.log("Disponíveis: " + res)
    }

}

const hotel = new Hotel()
hotel.verificarDisponibilidade()