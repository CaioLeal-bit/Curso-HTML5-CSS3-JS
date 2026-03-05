const Hotel = function(){
    this.nome = 'Hotel';
    this.quantidadeSuites = 30
    let suitesOcupadas = 25 // Encapsula as suites para que nao possam ser acessadas diretamente

    this.reservar = function(){
        if(suitesOcupadas < this.quantidadeSuites){
            suitesOcupadas++
            console.log("Suites Ocupadas: " + suitesOcupadas)
        }else{
            console.log("Não há suites disponíveis para reserva.")
        }
    }
}


const hotel = new Hotel()
hotel.reservar()
