/* console.log("quebre 3 ovos")
console.log("Misture com a farinha")
console.log("leve ao forno")

//Comentário: O código acima é um exemplo de instruções para fazer um bolo. Ele lista os passos necessários para preparar a massa do bolo.

/* 

Para comentar um bloco de código, deve-se utilizar essa sintaxe.




let altura = 1.70
let peso = 70
//let imc = peso / (altura * altura)
const pi = 3.14

console.log("O IMC é: " + (peso / (altura * altura)))
console.log("O valor de pi é: " + pi)

let nome = "Caio" //string
let numero = 10 //inteiros ou decimais
let decimal = 3.14 //número decimal


let numero1 = 10
let numero2 = 5

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log("A soma é: " + soma, "A subtração é: " + subtracao, "A multiplicação é: " + multiplicacao, "A divisão é: " + divisao)


let resultado = 10 == 10
console.log(resultado)

let resultado2 = 10 != 5
console.log(resultado2)

let resultado3 = 10 > 5
console.log(resultado3)

let resultado4 = 10 <= 10
console.log(resultado4)

let idade = 17
if (idade >= 18) {
    console.log("Você é maior de idade.")
}else{
    console.log("Você é menor de idade.")
}


let opcao = 7

switch(opcao){
    case 1:
        console.log("Opção 1 selecionada.")
        break

    case 2:
        console.log("Opção 2 selecionada.")
        break

    case 3:
        console.log("Opção 3 selecionada.")
        break

    default:
        console.log("Opção inválida.")
}

let idade = 20

idade>= 18 ? "Maior idade" : "Menor idade"
*/

function calcularMedia(nota1, nota2, nota3){
    let totalNotas = nota1 + nota2 + nota3
    let media = totalNotas / 3

    return media
}

let media = calcularMedia(7, 8, 9)
let novaMedia  = media + 1
console.log("A média é: " + novaMedia)