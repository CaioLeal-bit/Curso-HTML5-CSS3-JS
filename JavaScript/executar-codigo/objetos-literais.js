let nome = "Notebook"
let preco = 1200

const produto = {
    nome,
    preco,
    exibirProduto: function(){
        console.log(`Produto: ${this.nome} - Preço: R$${this.preco}`)
    }
}

const pro = produto

produto.exibirProduto()