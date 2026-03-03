//Procedural
// function verificarDisponibilidade(quartos, ocupados){
//     let res = quartos - ocupados
//     console.log("Disponíveis: " + res)
// }

// let quartos = 20
// let ocupados = 5

// verificarDisponibilidade(quartos, ocupados)

//Orientada a objetos
const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let disponiveis = this.quartos - this.ocupados
        console.log("Disponíveis: " + disponiveis)
    }
}

hotel.verificarDisponibilidade()