// Lista de exercícios LocalStorage 

// 1. Contador Persistente
// Crie um contador com botões “+” e “−”. O número deve ser
// salvo no localStorage e restaurado ao recarregar a página

let contador = parseInt(localStorage.getItem("contador")) || 0; // Pega o valor dalvo no localstorage, se não tiver inicia com 0
document.getElementById("contador").textContent = contador; // Acha o elemento q ta no html

function alterarContador(valor) {
  contador += valor;
  document.getElementById("contador").textContent = contador; // Atualiza o valor na tela
  localStorage.setItem("contador", contador); // Salva o valor pra continuar igual quando eu recarregar a página 
}

// 2. Texto Salvo
// Crie um <textarea> onde o texto digitado seja salvo
// automaticamente no localStorage a cada digitação. Ao
// recarregar a página, o texto deve reaparecer.

const textarea = document.getElementById("meuTexto");

const textoSalvo = localStorage.getItem("textoSalvo"); //tenta buscar algo savo
if (textoSalvo) {
  textarea.value = textoSalvo; // Se já existir algo salvo ele vai buscar e colocar na tela 
}

textarea.addEventListener("input", function () { //smp que eu digitar algo dentro ele vai salvar no localstorage
  localStorage.setItem("textoSalvo", textarea.value);
});

// 3. Checkbox Persistente
// Faça uma lista de tarefas com checkboxes. Ao marcar uma
// tarefa como feita, essa informação deve ser salva no
// localStorage.

const checkboxes = document.querySelectorAll("#listaTarefas input[type='checkbox']");
checkboxes.forEach((checkbox) => {
  const id = checkbox.dataset.id;
  const salvo = localStorage.getItem("tarefa_" + id); // Ve se essa tarefa já foi marcada ou não 
  checkbox.checked = salvo === "true"; // se estiver salvo msm (true), quando recarregar ele vai aparecer marcado 
  checkbox.addEventListener("change", () => { //toda vez que eu marco ou desmarco o checkbox -->
    localStorage.setItem("tarefa_" + id, checkbox.checked); // --> salva a alteração no localstorage
  });
});

// 4.Nome do Usuário
// Ao acessar a página, pergunte o nome do usuário (via prompt
// ou input). Salve esse nome e cumprimente o usuário nas
// visitas seguintes: “Olá, [nome]!”

let nomeUsuario = localStorage.getItem("nomeUsuario"); // pega o nome salvo do usuário no localstorage 
if (!nomeUsuario) { // se não ter nome salvo
  nomeUsuario = prompt("Qual seu nome?");
  if (nomeUsuario) {
    localStorage.setItem("nomeUsuario", nomeUsuario); // salva o nome do usuário com ''nomeUsuario''
  }
}
if (nomeUsuario) { // se já ter nome salvo
  document.getElementById("cumprimento").textContent = `Oii, ${nomeUsuario}! Tudo certo?`;
}

// 5. Escolha de Cor
// Crie três botões com cores diferentes. Quando o usuário clicar
// em uma cor, o fundo da página muda e essa preferência é
// salva no localStorage.

function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
  localStorage.setItem("corFundo", cor); // salva a cor
}
const corSalva = localStorage.getItem("corFundo");
if (corSalva) { // fundo começa com a cor salva 
  document.body.style.backgroundColor = corSalva;
}

// 6.Modo Noturno
// Adicione um botão “Modo Escuro”. Quando ativado, o fundo e
// os textos da página mudam, e essa escolha é salva para
// manter o tema mesmo após recarregar a página.

function alternarModo() {
  document.body.classList.toggle("dark");
  const modoEscuro = document.body.classList.contains("dark");
  localStorage.setItem("modoEscuro", modoEscuro); // salva no localstorage 
}
if (localStorage.getItem("modoEscuro") === "true") { // se o modo escuro estiver ativado (true), quando recarregar ele já vai estar ativo 
  document.body.classList.add("dark");
}

// 7. Visita Diária
// Mostre uma mensagem como “Bem-vindo de volta!” caso a
// última visita tenha sido no mesmo dia, e “Saudades de você!”
// se foi em outro dia. Use localStorage para salvar a data.

const hoje = new Date().toLocaleDateString(); // pega a data de hoje
const ultimaVisita = localStorage.getItem("dataVisita"); // busca a data da última visita 

if (ultimaVisita === hoje) { // se a última visita foi no mesmo dia
  document.getElementById("mensagemVisita").textContent = "Bem-vindo de volta!";
} else if (ultimaVisita) { // se a última visita foi outro dia
  document.getElementById("mensagemVisita").textContent = "Demorou pra voltar hein";
}
localStorage.setItem("dataVisita", hoje); // salva a data de hoje como a nova data da última visita 


// 8. Última Visita
// Salve a data e hora da última visita do usuário e mostre-a ao
// entrar novamente na página: “Última visita: 29/06/2025 22:30”.

const dataHoraAgora = new Date().toLocaleString(); //Pega a data e o horário atual (bem parecido com o anterior, mas tem diferença entre o ''toLocaleString'' e o ''toLocaleDateString'')
const ultima = localStorage.getItem("ultimaVisita"); // verifica se já tem alguma data salva
if (ultima) { // se ja ter salva
  document.getElementById("ultimaVisita").textContent = `Última visita: ${ultima}`;
}
localStorage.setItem("ultimaVisita", dataHoraAgora); // atualiza a data atual no localstorage

// 9. Mensagem de Boas-vindas Personalizada
// Crie um campo de texto onde o usuário digita uma mensagem
// de boas-vindas. Essa mensagem deve ser exibida no topo da
// página e salva no localStorage.

function salvarMensagem() {
  const mensagem = document.getElementById("inputMensagem").value; // Pega o valor digitado no input 
  localStorage.setItem("mensagemPersonalizada", mensagem); // Salva no localstorage
  document.getElementById("mensagemTopo").textContent = mensagem; // mostra a mensagem salva 
}
const mensagemSalva = localStorage.getItem("mensagemPersonalizada"); // quando recarrega a página tenta pegar essa mensagem salva
if (mensagemSalva) { 
  document.getElementById("mensagemTopo").textContent = mensagemSalva; // Se tiver uma mensagem salva exibe ela
}

// 10. Número Secreto
// Gere um número aleatório entre 1 e 10 e salve no localStorage.
// O usuário deve tentar adivinhar o número. Mesmo que ele
// feche o navegador, o número continua sendo o mesmo até ele
// acertar.

let numeroSecreto = localStorage.getItem("numeroSecreto"); // tenta pegar o número salvo no localstorage
if (!numeroSecreto) { // se não ter número salvo.. 
  numeroSecreto = Math.floor(Math.random() * 10) + 1; // gera um número aleatorio entre 1 e 10 // lembrete: math.floor: arredonda um número decimal para baixo
  localStorage.setItem("numeroSecreto", numeroSecreto); // salva o número gerado no localstorage
}
function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value); // Pega o número que o usuário digitou no input e converte para número inteiro
  if (palpite === parseInt(numeroSecreto)) { // se o palpite for igual ao número secreto
    document.getElementById("resultadoPalpite").textContent = "Parabéns, você acertou!";
    localStorage.removeItem("numeroSecreto"); // dai reinicia o ''jogo''
  } else { // se o palpite n for igual o número secreto 
    document.getElementById("resultadoPalpite").textContent = "Tente novamente!";
  }
}
