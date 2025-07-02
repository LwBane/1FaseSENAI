// 1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras maiúsculas e ordenadas.

const disciplinas = ["desenvolvimento", "web", "javascript", "lógica", "frontend"]; // apenas desenvolvimento, frontend e javascript tem mais de 7 letras

const disciplinasFiltradas = 
disciplinas.filter(disciplina => disciplina.length > 7).map(disciplina => disciplina.toUpperCase()).sort(); 
console.log(disciplinasFiltradas);

// exp: filtra primeiro as que tem mais de 7 caracteres, depois cria um novo array com elas com letra maiúscula e por último ordena o array em ordem 

// 2. Média dos alunos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média.

const alunos = [
    {nome: "Ana", notas: [8,9,10]},
    {nome: "Carlos", notas: [6,7,5]}
]; 

const mediaAlunos = alunos.map(aluno => {
    const soma = aluno.notas.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0);
    const media = soma / aluno.notas.length; 
    return {nome: aluno.nome, media: media}; 
});

console.log(mediaAlunos); // Ana é pra dar 9 --> 27/3 = 9; Carlos é pra dar 6 --> 18/3 = 6


// 3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// A partir do array abaixo, calcule o saldo final do estoque:

const transacoes = [
    {tipo: "entrada", valor: 100},
    {tipo: "saida", valor: 60},
    {tipo: "entrada", valor: 50},
    {tipo: "saida", valor: 30}
]

function SaldoEstoque(transacoes) {
    return transacoes.reduce((saldo, transacao) => {
        if (transacao.tipo === "entrada") {
            return saldo + transacao.valor; // exp: vai estar somando o valor se o tipo for "entrada"
        } else {                            // se não, ele subtrai o saldo do valor das transações 
            return saldo - transacao.valor;
        }
    }, 0);
}

console.log(`Saldo final do estoque: ${SaldoEstoque(transacoes)}`); // Resultado: 60 --> 100 + 50 - 60 - 30 = 60 

// 4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// Crie uma função que aplica 10% de desconto em produtos com valor > R$100.

const produtosLoja = [
    {nome: "Camiseta", preco: 150},
    {nome: "Lápis", preco: 5}
];

function desconto(produtosLoja) {
    return produtosLoja.filter(produtos => produtos.preco > 100)
}

console.log(desconto(produtosLoja));


// 5. Verificações de dados (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// Verifique se algum usuário está logado e se todos estão logados:

const usuarios = [
    {nome: "Ana", logado: true},
    {nome: "Lucas", logado: false},
    {nome: "Beatriz", logado: true},
]

const alguemLogado = usuarios.some(usuario => usuario.logado); // o some verifica se algum objeto atende a condição 
console.log(`Algum usuário está logado? ${alguemLogado}`); // verdade, ana e beatriz = true 

const todosLogados = usuarios.every(usuario => usuario.logado); // o every verifica se todos objetos atendem a condição
console.log(`Todos os usuários estão logados? ${todosLogados}`); // falso, lucas = false 

// 6. Função buscar produto (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// Crie uma função que busca um produto pelo nome:

const produtos = [
    {nome: "Notebook", preco: 3000},
    {nome: "Mouse", preco: 50},
]; 

function buscarProduto(nome) {
    return produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase()); 
}

console.log(buscarProduto("notebook"));
console.log(buscarProduto("mouse"));
console.log(buscarProduto("teclado")); // retorna undefined pq n tem teclado no array

// 7. Listar tarefas pendentes (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)  --> Retornar uma lista nova 
// Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":

const tarefas = [
    { descricao: "Estudar JS", concluida: true},
    { descricao: "Fazer prova", concluida: false},
    { descricao: "Enviar projeto", concluida: false}
]; 

const naoConcluidas = tarefas.filter(tarefa => tarefa.concluida === false)
console.log(naoConcluidas)
