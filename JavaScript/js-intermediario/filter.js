const usuarios = [
    {nome: "Caio", idade: 30},
    {nome: "Maria", idade: 25},
    {nome: "João", idade: 15},
    {nome: "Pedro", idade: 28},
    {nome: "Ana", idade: 22}
]

const funcao = function(item, i, arr){
    return item.idade >= this.filtro
}

const filtro = {
    filtro: 18
}


const usuariosMaiorDeIdade = usuarios.filter(funcao, filtro)
console.log(usuariosMaiorDeIdade)