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

// Exercício 1: Filtrar Números Maiores que 10

const numerosMaiores10 = numeros.filter(numero => numero > 10); // o filter cria um novo array com todos os elementos que passaram na condição 
console.log(numerosMaiores10);


// Exercício 2: Dobrar todos os números do array

const numerosEmDobro = numeros.map(numero => numero * 2); // map aplica uma função a cada elemento do array e retorna um novo array com os resultados
console.log(numerosEmDobro);

// Exercício 3: Somar todos os números do array.

const somaNumeros = numeros.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0) // reduce aplica uma função acumuladora a cada elemento do array, resultando em um único valor
console.log(somaNumeros);

// Explicação: 
        // acumulado = 0        // valor inicial
        // valorAtual = 5       → acumulado = 0 + 5 = 5
        // valorAtual = 12      → acumulado = 5 + 12 = 17 


// Exercício 4: Encontrar o maior número.

let maiorNumero = Math.max(...numeros) // Math.max retorna o maior número entre os elementos passados, o operador spread (...) é usado para passar todos os elementos do array
console.log(maiorNumero)

// Exercício 5: Encontrar o menor número.

let menorNumero = Math.min(...numeros)
console.log(menorNumero)

// Exercício 6: Ordenar os números em ordem crescente.

const numerosCrescente = numeros.sort((a, b) => a - b); // sort ordena os elementos do array, a função de comparação (a, b) determina a ordem crescente
console.log(numerosCrescente);

// Explicação: 

        // Se for negativo, a vem antes de b
        // Se for positivo, b vem antes de a
    
            //O JavaScript compara pares

                //Compara 5 e 12: 5 - 12 = -7 → negativo → 5 fica antes de 12
                //Compara 12 e 8: 12 - 8 = 4 → positivo → 8 fica antes de 12
                //Compara 5 e 8: 5 - 8 = -3 → 5 já está antes → mantém


// Exercício 7: Criar um novo array com apenas os números ímpares.

let numerosImpares = numeros.filter(numero => numero % 2 !== 0)
console.log(numerosImpares); 

// Exercício 8: Verificar se todos os números são maiores que 3. 

let MaioresQue3 = numeros.every(numero => numero > 3); // every verifica se todos os elementos do array satisfazem a condição
console.log(MaioresQue3); // Resultado false, pois 3 não é maior que 3

// Exercício 9: Verificar se existe algum número maior que 100. 

let existeMaiorQue100 = numeros.some(numero => numero > 100); // some verifica se pelo menos um elemento do array satisfaz a condição
console.log(existeMaiorQue100); // Resultado true, pois 130 é maior que 100

// Exercício 10: Retornar a média dos números.

function calcularMedia(array) {
        const soma = array.reduce((acumulado, valorAtual) => acumulado += valorAtual, 0);
        return soma / array.length;
        }
console.log(calcularMedia(numeros)); // Resultado: 27.777... -> 250/9
 
// Uso do function para caso quisesse calcular a média de outro array. Poderia ter feito sem o function pra testar só o array números 

        //const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        //const media = soma / numeros.length;
        //console.log(media);