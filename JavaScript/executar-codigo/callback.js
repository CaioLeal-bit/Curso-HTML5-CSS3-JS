function processar(callbackSucesso, callbackErro) {
    let resultadoProcessamento = true; // Simulando um resultado de processamento
    if (resultadoProcessamento) {
        callbackSucesso("Processamento concluído com sucesso!");
    } else {
        callbackErro("Ocorreu um erro durante o processamento.");
    }
}

const salvarSucesso = function(){
    console.log("Salvando os dados...");
}

salvarSucesso();

const cancelar = function(){
    console.log("Erro ao salvar os dados.");
}


processar(salvarSucesso, cancelar);