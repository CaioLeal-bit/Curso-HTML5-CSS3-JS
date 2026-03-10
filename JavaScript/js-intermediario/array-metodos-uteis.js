const estados = ["SP", "RJ", "MG", "ES"];

estados.pop(); // Remove o último elemento do array
console.log(estados); // ["SP", "RJ", "MG"]

estados.shift(); // Remove o primeiro elemento do array
console.log(estados); // ["RJ", "MG"]

estados.push("BA"); // Adiciona um elemento no final do array
console.log(estados); // ["RJ", "MG", "BA"]

estados.unshift("RS"); // Adiciona um elemento no início do array
console.log(estados); // ["RS", "RJ", "MG", "BA"]

// const novo = estados.splice(0, 2, "PR", "SC"); // Remove elementos a partir do índice 0, removendo 2 elementos e adicionando "PR" e "SC"
// console.log(novo); // ["RS", "RJ"]

// const novo = estados.slice(0, 2); // Cria um novo array com os elementos do índice 0 ao índice 2 (exclusivo)
// console.log(novo);

const usuarios = ["João", "Maria", "Pedro", "Ana"];
let texto = usuarios.join(); // Junta os elementos do array em uma string, separados por vírgula
console.log(texto); // "João,Maria,Pedro,Ana"

texto = usuarios.join(" - "); // Junta os elementos do array em uma string, separados por " - "
console.log(texto); // "João - Maria - Pedro - Ana"