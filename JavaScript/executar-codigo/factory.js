const produto1 = {
    nome: "Notebook",
    preco: 1200
}

const produto2 = {
    nome: "Notebook",
    preco: 1200
}

const ProdutoFactory = function(nome, preco){
    return {
        nome,
        preco,   
    }
}

const produto = ProdutoFactory("Notebook", 1200)
console.log(produto)