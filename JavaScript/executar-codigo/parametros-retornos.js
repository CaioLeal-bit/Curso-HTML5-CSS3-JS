// function somar(numero1, numero2){
//     numero1 = isNaN(numero1) ? 0 : numero1;
//     numero2 = isNaN(numero2) ? 0 : numero2;
//     return numero1 + numero2;
// }

function somar(numero1, numero2){
    return numero1 + numero2;
}

function calcularSalario(salario, desconto){
    //desconto = isNaN(desconto) ? 0 : desconto;
    if(salario ==0){
        console.log("Salário não pode ser zero");
    }else{
        return salario - desconto;
    }
    return salario - desconto;
}

let resultado = calcularSalario(0, 200);
console.log(resultado);