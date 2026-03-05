const produto = {
    nome: "Notebook",
}

Object.freeze(produto)
produto.nome = "Smartphone"

console.log(produto)