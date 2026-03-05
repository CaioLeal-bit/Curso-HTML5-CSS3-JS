function contarQuantidadeLetras(produto){
    try {
        console.log(produto.nome.length);
        console.log("Teste")
    } catch(erro){
        tratarErro(erro);
        //console.log("Ocorreu um erro: " + erro.message);
    } /*finally {
        console.log("Bloco finally executado.");
    }*/
}

function tratarErro(erro){
    throw new Error("O produto não possui a propriedade nome.");
}

const produto = {
    nome: "Notebook",
    preco: 1200
}

contarQuantidadeLetras(produto);