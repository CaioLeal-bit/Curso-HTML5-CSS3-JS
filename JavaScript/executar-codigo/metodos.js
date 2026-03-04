class Usuario{
    constructor(){
        this.email = ""
        this.senha = ""
        this.subtotalCompra = 0
    }

    logar(){ //metodo logar

        let emailBD = "ca@gmail.com"
        let senhaBD = "1234"

        if(senhaBD == this.senha){
            return "senha válida"
        }else{
            return "Email ou senha incorretos!"
        }

    }

    calcularDesconto( cupom ){

        let desconto = 0;

        if(cupom == "DESC20"){
            desconto = 20
        }else if(cupom == "FESTA10"){
            desconto = 10
        }

        let total = this.subtotalCompra - desconto

        return total
    }
}

const usuario = new Usuario();
usuario.subtotalCompra = 500
usuario.calcularDesconto("DESC20")

// usuario.email = "ca@gmail.com"
// usuario.senha = "1234"
// let mensagem = usuario.logar();
// console.log(mensagem)