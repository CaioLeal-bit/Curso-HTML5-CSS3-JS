const pessoas = ["Caio", "Maria", "João", "Pedro", "Ana"];

let funcao = function(item, i, arr){
    return {nome: item}
}

const novoArray = pessoas.map(funcao)
console.log(novoArray)

const produtosDolar = [
    {produto: "Notebook", preco: 2000, moeda: "$"},
    {produto: "Smartphone", preco: 1000, moeda: "$"} 
]

const novo = produtosDolar.map(function(item){
    let preco = item.preco * 5.50
    return {produto: item.produto, preco: preco, moeda: "R$"}
})
    
console.log(novo)
