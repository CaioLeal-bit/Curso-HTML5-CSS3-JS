const Hotel = function(){
    this.nome = 'Hotel';
    this.quantidadeSuites = 30
    this.suitesOcupadas = 25

    this.reservar = function(){
        this.suitesOcupadas++
    }
}


const hotel = new Hotel()
hotel.reservar()