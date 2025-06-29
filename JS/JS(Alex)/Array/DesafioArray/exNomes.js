// 📌 Array de Entrada:

const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
] 

// Exercício 1: Ordenar os nomes em ordem alfabética.

nomes.sort(); 
console.log(nomes); // Resultado: ["Ana", "Beatriz", "Bruno", "Carlos", "Daniel", "Eduarda"]

// Exercício 2: Filtrar os nomes com mais de 5 letras.

const nomesMaisDe5Letras = nomes.filter(nome => nome.length > 5);
console.log(nomesMaisDe5Letras); 

// Exercício 3: Transformar todos os nomes em letras minúsculas.

const nomesMinusculos = nomes.map(nome => nome.toLowerCase()); // map aplica uma função a cada elemento do array e retorna um novo array com os resultados; toLowerCase() converte cada nome para minúsculas
console.log(nomesMinusculos); // Resultado: ["ana", "carlos", "beatriz", "daniel", "eduarda", "bruno"]

// Exercício 4: Verificar se algum nome começa com a letra “B”.

const nomeInicioB = nomes.some(nome => nome.startsWith("B")); // some verifica se pelo menos um elemento do array satisfaz a condição
console.log(nomeInicioB); // Resultado: true, pois "Beatriz" e "Bruno" começam com "B" 
// Importante deixar como "B" maiúsculo, pois o método startsWith é sensível a maiúsculas e minúsculas, testei com "b" minúsculo e não retornou true.

// Exercício 5: Encontrar o nome “Daniel” no array.

const nomeDaniel = nomes.find(nome => nome === "Daniel"); // find retorna o primeiro elemento do array que satisfaz a condição
console.log(nomeDaniel); // Resultado: "Daniel", se não encontrar retorna undefined

// Exercício 6: Criar um array com a quantidade de letras de cada nome.

const quantidadeLetras = nomes.map(nome => nome.length); // map aplica uma função a cada elemento do array e retorna um novo array com os resultados
console.log(quantidadeLetras); // Resultado: [3, 7, 5, 6, 6, 7] -> Ana: 3 ; Beatriz: 7; Bruno: 5; Carlos: 6; Daniel: 6; Eduarda: 7


// Exercício 7: Juntar todos os nomes em uma string separada por vírgula.

console.log(nomes.join(', ')) // join() junta todos os elementos do array em uma string, separando-os pelo delimitador especificado 

