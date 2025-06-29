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

// Exercício 1: Dado o array numeros, crie um array apenas com os quadrados dos números pares.

const numerosParesQuadrados = numeros.filter(numero => numero % 2 === 0).map(numero => numero ** 2);
console.log(numerosParesQuadrados); // Resultado: [144, 16900, 1936, 484]

// Exercício 2: A partir de nomes, retorne o nome com maior quantidade de letras.

const nomeMaiorQuantidadeLetras = nomes.reduce((maior, atual) => {
  return (atual.length > maior.length) ? atual : maior;
}, "");
console.log(nomeMaiorQuantidadeLetras); // Resultado: "Beatriz", o reduce vai manter o primeiro que encontrou com o maior tamanho, que é "Beatriz", mesmo eduarda tbm tendo 7 letras


// Pra mostrar os dois: 
        //const nomesComMaiorTamanho = nomes.reduce((acumulador, nomeAtual) => {
                //if (nomeAtual.length > acumulador[0].length) {
                    //return [nomeAtual];            // reinicia o array com o novo maior nome
                //} else if (nomeAtual.length === acumulador[0].length) {
                    //acumulador.push(nomeAtual);    // adiciona nome do mesmo tamanho no array
                //}
                //return acumulador;               // mantém o array atual
        //}, [""]);                         // começa com um array contendo string vazia

// Exercício 3: Verifique se todos os nomes terminam com uma vogal.

const todosTerminamComVogal = nomes.every(nome => {
  const ultimaLetra = nome[nome.length - 1].toLowerCase(); // verifica a última letra do nome e converte para minúscula
  return ['a', 'e', 'i', 'o', 'u'].includes(ultimaLetra); // verifica se a última letra é uma vogal
});
console.log(todosTerminamComVogal); // Resultado: false, daniel termina com "l", que não é uma vogal

// Exercício 4: Junte os arrays numeros e nomes em um único array.

const numerosENomes = [...numeros, ...nomes]; // usa o operador spread para juntar os dois arrays
console.log(numerosENomes);

// Exercício 5: Crie um array com os nomes dos produtos que custam menos de R$100 e pertencem a “Roupas”.

const produtosRoupasAbaixo100 = produtos.filter(produto => produto.categoria === "Roupas" && produto.preco < 100).map(produto => produto.nome);
console.log(produtosRoupasAbaixo100); // Resultado: ["Camiseta", "Meias"]

// Exercício 6: Crie uma função que calcule o valor médio dos produtos da categoria “Eletrônicos”.

function calcularMediaEletronicos() {
  const eletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos");
  const totalPreco = eletronicos.reduce((acumulado, produto) => acumulado + produto.preco, 0);
  return (totalPreco / eletronicos.length).toFixed(2); // retorna a média formatada com 2 casas decimais
}
console.log(`Média dos produtos Eletrônicos: R$ ${calcularMediaEletronicos()}`); // Resultado: Média dos produtos Eletrônicos: R$ 893.30