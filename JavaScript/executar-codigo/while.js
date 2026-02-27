let numero = 0

let postagens = [
    "Postagem 1",
    "Postagem 2",
    "Postagem 3",
    "Postagem 4",
    "Postagem 5"
]

const totalPostagens = postagens.length

// while( numero <= 5 ) {
//     console.log("Olá, mundo!" + numero);
//     numero++;
// }

while (numero < totalPostagens){
    console.log("IMAGEM " + numero)
    console.log(postagens[numero])
    console.log("------")
    numero++;
}