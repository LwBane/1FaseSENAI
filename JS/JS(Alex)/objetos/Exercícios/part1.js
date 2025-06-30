// 1. Catálogo de Produtos
// Crie um array com objetos representando produtos de uma loja. Implemente
// uma função que recebe um nome e retorna o produto correspondente.

const produtos = [                                                // Usei a mesma entrada do exercício array 
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
] 

function buscarProduto(nome) {
  return produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase()); // compara o nome do produto com o nome buscado, ignorando maiúsculas e minúsculas
}

console.log(buscarProduto("camiseta")); // teste 1 
console.log(buscarProduto("Notebook")); // teste 2

// 2. Sistema de Biblioteca
// Crie um objeto livro com título, autor e status de empréstimo. Implemente
// métodos emprestar() e devolver() que atualizam o status.

const livro = {
    titulo: "Memórias póstumas de Brás Cubas",
    autor: "Machado de Assis",
    emprestado: false,
    
    emprestar() {
        if (!this.emprestado) {         // explicação: como eu defini no começo do codigo que o livro começa com emprestado = false, então se ele não estiver emprestado, ou seja, se for false, o codigo verifica dnv essa condição -> (!this.emprestado), que vai resultar em true, dizendo que o livro pode ser emprestado
        this.emprestado = true;
        console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
        console.log(`O livro "${this.titulo}" já está emprestado.`);
        }
    },
    
    devolver() {
        if (this.emprestado) {
        this.emprestado = false;            // se o livro estiver emprestado, ele vai mudar o status para false, ou seja, não emprestado
        console.log(`O livro "${this.titulo}" foi devolvido.`);
        } else {
        console.log(`O livro "${this.titulo}" não está emprestado.`);
        }
    }
    };

livro.emprestar(); // O livro "Memórias póstumas de Brás Cubas" foi emprestado.
livro.emprestar(); // O livro "Memórias póstumas de Brás Cubas" já está emprestado.
livro.devolver(); // O livro "Memórias póstumas de Brás Cubas" foi devolvido.
livro.devolver(); // O livro "Memórias póstumas de Brás Cubas" não está emprestado.


// Ps: Achei meio confuso, vou perguntar melhor depois essa parte do devolver()

// 3. Conversor de Temperatura
// Crie um objeto com métodos celsiusParaFahrenheit e fahrenheitParaCelsius , que
// retornem os valores convertidos.

const conversorTemperatura = {
  celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  },

  fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
};

console.log(conversorTemperatura.celsiusParaFahrenheit(25)); // 77
console.log(conversorTemperatura.fahrenheitParaCelsius(77)); // 25

// 4. Agenda de Contatos
// Crie um objeto agenda que contenha uma lista de contatos. Implemente
// funções para adicionar, remover e listar contatos.

const agenda = {
  contatos: [],

  adicionarContato(nome, telefone) {
    this.contatos.push({ nome, telefone });
    console.log(`Contato ${nome} adicionado com sucesso.`);
  },

  removerContato(nome) {
    const index = this.contatos.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());

    if (index !== -1) {
      this.contatos.splice(index, 1);
      console.log(`Contato ${nome} removido com sucesso.`);
    } else {
      console.log(`Contato ${nome} não encontrado.`);
    }
  },

  listarContatos() {
    console.log("Lista de contatos:");
    this.contatos.forEach((contato, i) => {
      console.log(`${i + 1}. ${contato.nome} -> ${contato.telefone}`);
    });
  }
};

agenda.adicionarContato("Cleitinho", "1234-5678"); // saida: Contato Cleitinho adicionado com sucesso.
agenda.adicionarContato("Mariazinha", "9876-5432"); // saida: Contato Mariazinha adicionado com sucesso.
agenda.removerContato("Cleitinho"); // saida: Contato Cleitinho removido com sucesso.
agenda.listarContatos(); 

// 5. Relatório de Notas
// Crie um objeto aluno com notas em várias disciplinas. Implemente um método
// media() que retorna a média geral.

const aluno = {
  nome: "Joãozinho",
  notas: {
    matematica: 5,
    portugues: 7,
    historia: 10,
    ciencias: 5
  },

  media() {
    const valores = Object.values(this.notas);
    const soma = valores.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / valores.length;
  }
};

console.log(`A média do aluno ${aluno.nome} é: ${aluno.media().toFixed(2)}`); // A média do aluno Joãozinho é: 6.75

// 6. Carrinho de Compras
// Implemente um objeto carrinho com um array de itens. Cada item tem nome,
// quantidade e valor. Crie métodos para adicionarItem , removerItem e total.

const carrinho = {
  itens: [],

  adicionarItem(nome, quantidade, valor) {
    this.itens.push({ nome, quantidade, valor });
    console.log(`Item "${nome}" adicionado ao carrinho.`);
  },

  removerItem(nome) {
    const index = this.itens.findIndex(item => item.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
      this.itens.splice(index, 1);              // o splice() remove o item do array, e o index é o índice do item que queremos remover
      console.log(`Item "${nome}" removido.`);
    } else {
      console.log(`Item "${nome}" não encontrado.`);
    }
  },

  total() {
    return this.itens.reduce((acumulador, item) => acumulador + (item.valor * item.quantidade), 0);
  }
};

// ex: 

carrinho.adicionarItem("Camiseta", 2, 29.9); // Item "Camiseta" adicionado ao carrinho.
carrinho.adicionarItem("Notebook", 1, 2500); // Item "Notebook" adicionado ao carrinho.
carrinho.removerItem("Camiseta"); // Item "Camiseta" removido.
console.log(`Total do carrinho: R$ ${carrinho.total().toFixed(2)}`); // Total do carrinho: R$ 2500.00

//ps: aqui quando pede pra remover ele acaba removendo o item inteiro, ou seja, se eu adicionar 2 camisetas, ele vai remover as duas camisetas, 
// e não só uma, teria que ver como faz pra remover só uma, ou pro usuário especificar, não sei

// 7. Filtrar Alunos Aprovados
// Dado um array de objetos alunos , filtre apenas os que têm média acima de 6 e retorne seus nomes.

const alunos = [
  { nome: "Ana", media: 7.5 },
  { nome: "Carlos", media: 5.8 },
  { nome: "Beatriz", media: 8 },
  { nome: "João", media: 6 }
];
const aprovados = alunos
  .filter(aluno => aluno.media > 6)
  .map(aluno => aluno.nome);

console.log("Aprovados:", aprovados); // ["Ana", "Beatriz"]

// 8. Conversor de Moedas com Objeto 
// Crie um objeto moeda com taxas de conversão e um método converter(valor, de,
// para) que retorna o valor convertido.

const moeda = {
  taxas: {
    BRL: 1,        // Real
    USD: 0.20,     // Dólar (no caso 1 real em dólar)
    EUR: 0.18,     // Euro
  },

  converter(valor, de, para) {
    const emReais = valor / this.taxas[de];     // converter de outra moeda para real → divide
    const convertido = emReais * this.taxas[para]; // converter de real para outra moeda → multiplica
    return convertido.toFixed(2);
  }
};

console.log("R$50 em USD(Dólar):", moeda.converter(50, "BRL", "USD")); // Ex: 10.00
console.log("€30 em BRL:", moeda.converter(30, "EUR", "BRL")); // Ex: 166.67