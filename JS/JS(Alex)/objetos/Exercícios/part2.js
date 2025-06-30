// 1. Banco com Múltiplas Contas
// Crie um objeto banco com várias contas. Cada conta tem nome, saldo e
// métodos depositar , sacar . Implemente um relatório que mostre saldo total do
// banco.

const banco = {
  contas: [
    { nome: "Anitta", saldo: 10 },
    { nome: "Bruno Mars", saldo: 50 }
  ],

  depositar(nomeDaConta, valorDepositado) {
    const contaEncontrada = this.contas.find(conta => conta.nome === nomeDaConta);
    if (contaEncontrada) {
      contaEncontrada.saldo += valorDepositado;
    }
  },

  sacar(nomeDaConta, valorSacado) {
    const contaEncontrada = this.contas.find(conta => conta.nome === nomeDaConta);
    if (contaEncontrada && contaEncontrada.saldo >= valorSacado) {
      contaEncontrada.saldo -= valorSacado;
    }
  },

  saldoTotal() {
    return this.contas.reduce((acumulador, contaAtual) => acumulador + contaAtual.saldo, 0);
  }
};

//ex: 

banco.depositar("Anitta", 20); // Deposita 50 na conta da Anitta
banco.sacar("Bruno Mars", 10); // Saca 20 da conta do Bruno Mars
console.log(`Saldo total do banco: R$ ${banco.saldoTotal().toFixed(2)}`); // Exibe o saldo total do banco, que deve ser 70.00


// 2. Sistema de Votação
// Crie um objeto que armazene votos por candidato. Implemente funções para
// votar e retornar o candidato mais votado.

const sistemaDeVotacao = {
  votosPorCandidato: {},

  votar(nomeDoCandidato) {
    if (!this.votosPorCandidato[nomeDoCandidato]) {
      this.votosPorCandidato[nomeDoCandidato] = 0;
    }
    this.votosPorCandidato[nomeDoCandidato] += 1;
  },

  candidatoMaisVotado() {
    let maiorQuantidadeDeVotos = 0;
    let candidatoComMaisVotos = null;

    for (const nomeDoCandidato in this.votosPorCandidato) {
      const quantidadeDeVotos = this.votosPorCandidato[nomeDoCandidato];
      if (quantidadeDeVotos > maiorQuantidadeDeVotos) {
        maiorQuantidadeDeVotos = quantidadeDeVotos;
        candidatoComMaisVotos = nomeDoCandidato;
      }
    }

    return candidatoComMaisVotos;
  }
};

// ex:

sistemaDeVotacao.votar("Candidato Jersu");
sistemaDeVotacao.votar("Candidato Denis");
sistemaDeVotacao.votar("Candidato Jersu");
console.log(`Candidato mais votado: ${sistemaDeVotacao.candidatoMaisVotado()}`); // Exibe o candidato mais votado, que deve ser "Candidato A"

// 3. Agenda Semanal de Compromissos
// Crie um objeto com os dias da semana como chaves e arrays de
// compromissos como valores. Implemente métodos para adicionar, remover e
// listar compromissos.

const semana = {
  compromissosPorDia: {
    segunda: [],
    terça: [],
    quarta: [],
    quinta: [],
    sexta: [],
    sabado: [],
    domingo: []
  },

  adicionarCompromisso(diaDaSemana, compromisso) {
    this.compromissosPorDia[diaDaSemana].push(compromisso);
  },

  removerCompromisso(diaDaSemana, compromisso) {
    this.compromissosPorDia[diaDaSemana] = this.compromissosPorDia[diaDaSemana].filter(
      compromissoAtual => compromissoAtual !== compromisso
    );
  },

  listarCompromissos(diaDaSemana) {
    return this.compromissosPorDia[diaDaSemana];
  }
};

// ex: 

semana.adicionarCompromisso("segunda", "Reunião com o time");
semana.adicionarCompromisso("terça", "Consulta médica");
semana.adicionarCompromisso("quarta", "Aula de programação");
semana.removerCompromisso("terça", "Consulta médica");
console.log("Compromissos de segunda:", semana.listarCompromissos("segunda")); // Exibe os compromissos de segunda, que deve ser ["Reunião com o time"]

// ps: importante estar igual o nome dos dias da semana, tava dando erro pq eu coloquei terca no array, e na função eu coloquei terça, 
// então não estava encontrando o array de compromissos do dia da semana

// 4. Gerador de Fichas de RPG
// Crie uma função que retorna objetos representando personagens com
// atributos aleatórios (força, destreza, vida). Permita criar múltiplos
// personagens e armazenar em um array.

function gerarPersonagem(nomeDoPersonagem) {
  return {
    nome: nomeDoPersonagem,
    forca: Math.floor(Math.random() * 10) + 1,
    destreza: Math.floor(Math.random() * 10) + 1,
    vida: Math.floor(Math.random() * 100) + 1
  };
}

const listaDePersonagens = [
  gerarPersonagem("Guerreiro"),
  gerarPersonagem("Mago")
];

// ex: 

listaDePersonagens.push(gerarPersonagem("Arqueiro"));
listaDePersonagens.push(gerarPersonagem("Ladino"));
console.log(listaDePersonagens); // Exibe a lista de personagens com atributos aleatórios (cada vez que eu chamo a função os atributos mudam)

// 5. Validador de Formulário com Objeto
// Crie uma função que recebe um objeto com campos ( nome , email , idade ) e
// valida cada campo com regras diferentes, retornando um objeto com
// mensagens de erro ou sucesso.

function validarFormulario(campos) {
  const mensagensDeErro = {};

  if (!campos.nome || campos.nome.length < 2) {
    mensagensDeErro.nome = "Nome inválido. Deve ter pelo menos 2 caracteres.";
  }

  if (!campos.email || !campos.email.includes("@")) {
    mensagensDeErro.email = "Email inválido. Deve conter '@'.";
  }

  if (!campos.idade || campos.idade < 18) {
    mensagensDeErro.idade = "Idade inválida. Deve ser maior ou igual a 18.";
  }

  if (Object.keys(mensagensDeErro).length === 0) {
    console.log("Formulário válido!"); 
    return { sucesso: true };
  } else {
    console.log("Formulário inválido! Erros encontrados:");
    return { sucesso: false, erros: mensagensDeErro };
  }
};

// ex: 

const resultado = validarFormulario({
    nome: "J", 
    email: "Joaozin.gmail.com",
    idade: 17
});
console.log(resultado);

console.log(validarFormulario({
    nome: "Joãozinho",
    email: "Joaozinho@gmail.com",
    idade: 20
}));


// 6. Sistema de Gestão de Projetos
// Crie uma estrutura com objetos projeto , cada um contendo nome, status e uma
// lista de tarefas . Cada tarefa tem nome, data e status. Implemente métodos para
// alterar status e listar tarefas por status.

const projetos = [
  {
    nomeDoProjeto: "Website",
    statusDoProjeto: "em andamento",
    listaDeTarefas: [
        { nomeDaTarefa: "Design", dataDeEntrega: "07/02", statusDaTarefa: "pendente" },
        { nomeDaTarefa: "Frontend", dataDeEntrega: "25/02", statusDaTarefa: "feito" },
        { nomeDaTarefa: "Backend", dataDeEntrega: "10/03", statusDaTarefa: "pendente" }
    ],

    alterarStatusDaTarefa(nomeDaTarefa, novoStatus) {
      const tarefaEncontrada = this.listaDeTarefas.find(tarefa => tarefa.nomeDaTarefa === nomeDaTarefa);
      if (tarefaEncontrada) {
        tarefaEncontrada.statusDaTarefa = novoStatus;
      }
    },

    listarTarefasPorStatus(statusDesejado) {
      return this.listaDeTarefas.filter(tarefa => tarefa.statusDaTarefa === statusDesejado);
    }
  }
];

// ex:

projetos[0].alterarStatusDaTarefa("Design", "feito"); // Altera o status da tarefa "Design" para "feito"
console.log("Tarefas pendentes:", projetos[0].listarTarefasPorStatus("pendente")); // Exibe as tarefas pendentes do projeto "Website"

// 7. Simulador de Jogo de Dados
// Crie um objeto jogoDeDados com métodos para rolar dois dados, registrar
// histórico e contar quantas vezes saiu um número específico.

const jogoDeDados = {
  historicoDeJogadas: [],

  rolarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    this.historicoDeJogadas.push(dado1, dado2);
    return [dado1, dado2];
  },

  contarOcorrencias(numeroEspecifico) {
    return this.historicoDeJogadas.filter(numeroDaJogada => numeroDaJogada === numeroEspecifico).length;
  }
};

// ex: 

const resultadoDados = jogoDeDados.rolarDados();
console.log(`Dados rolados: ${resultadoDados[0]} e ${resultadoDados[1]}`);
console.log(`Número 3 saiu ${jogoDeDados.contarOcorrencias(3)} vezes`); // Exibe quantas vezes o número 3 saiu nos dados rolados
