const numeros = [1, 2, 3, 4, 5];

const funcao = function(acumulador, atual, i){
    console.log("acumulador:" + acumulador)
    console.log("atual:" + atual)
    console.log("----")
    return acumulador + atual

}

const resultado = numeros.reduce(funcao, 6)
console.log(resultado)