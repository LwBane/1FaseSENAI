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

// Exercício 1: Filtrar os produtos da categoria “Eletrônicos”.

const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos"); // produto.categoria === "Eletrônicos" verifica se a categoria do produto é "Eletrônicos", e o filter cria um novo array com os produtos que satisfazem essa condição.
console.log(produtosEletronicos); // Resultado: Notebook, Mouse, Teclado

// Exercício 2: Criar um array apenas com os nomes dos produtos.

const nomesProdutos = produtos.map(produto => produto.nome); // map aplica uma função a cada elemento do array e retorna um novo array, neste caso com os nomes dos produtos.
console.log(nomesProdutos); // Resultado: ["Camiseta", "Notebook", "Mouse", "Meias", "Teclado"]

// Exercício 3: Criar um array com os preços com desconto de 10%.

const produtosComDesconto = produtos.map(produto => {
  return {
    ...produto,
    preco: (produto.preco * 0.9).toFixed(2) // aplica 10% de desconto e formata com 2 casas decimais
  };
});

console.log(produtosComDesconto);

// Exercício 4: Calcular o valor total de todos os produtos.

const valorTotal = produtos.reduce((acumulado, produto) => acumulado += produto.preco, 0); // reduce aplica uma função acumuladora a cada elemento do array, resultando em um único valor.
console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`); // toFixed(2) formata o valor com 2 casas decimais

// Exercício 5: Encontrar o produto mais caro.

const produtoMaisCaro = produtos.reduce((maisCaro, produtoAtual) => {
  return (maisCaro.preco > produtoAtual.preco) ? maisCaro : produtoAtual; // compara os preços dos produtos e retorna o mais caro, if else, ''é tipo, atual é mais alto q o q eu to comparando? entao retorna atual (?), não é? (:) retorna o mais caro''
});
console.log(`Produto mais caro: ${produtoMaisCaro.nome} : R$${produtoMaisCaro.preco}`); 

// Exercício 6: Ordenar os produtos do mais barato ao mais caro.

const produtosOrdenados = produtos.sort((a, b) => a.preco - b.preco); 
console.log(produtosOrdenados); 

// Exercício 8: Criar uma função que receba uma categoria e retorne os produtos dela.

function filtrarPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria === categoria);
}
console.log(filtrarPorCategoria("Roupas")); // Resultado: Camiseta, Meias 
console.log(filtrarPorCategoria("Eletrônicos")); // Resultado: Notebook, Mouse, Teclado

// Exercício 9: Criar um array com objetos apenas contendo nome e preço.

const nomesEPrecos = produtos.map(produto => {
  return {
    nome: produto.nome,
    preco: produto.preco
  };
});
console.log(nomesEPrecos);

// Exercício 10: Verificar se todos os produtos custam mais de R$ 5.

const todosCustamMaisDe5 = produtos.every(produto => produto.preco > 5); // every verifica se todos os elementos do array satisfazem a condição
console.log(todosCustamMaisDe5); // Resultado: true, pois todos os produtos custam mais de R$ 5

// Exercício 7: Agrupar os produtos por categoria (bônus - mais avançado).

const produtosPorCategoria = produtos.reduce((acumulador, produto) => {
  if (!acumulador[produto.categoria]) { // verifica se a categoria já existe no acumulador, (ex: como se fosse uma caixa)
    acumulador[produto.categoria] = []; // se a categoria não existir no acumulador, cria um array vazio (ex: uma caixa vazia)
  }
  acumulador[produto.categoria].push(produto); // adiciona o produto a caixa correspondente à sua categoria
  return acumulador; // retorna o objeto completo com todas as categorias atualizadas para a próxima iteração
}, {});
console.log(produtosPorCategoria);