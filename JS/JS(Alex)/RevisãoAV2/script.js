//Revisão para a avaliação 2


// If & Else --> controlador de fluxo 

    // if = se ; else = se não // 

    // >= maior que ou igual que ; <= menor que ou igual que

//ex: 

const notaAluno = 7

if(notaAluno >= 7){
    console.log("Você foi aprovado, parabéns!")
}else{
    console.log("Você infelizmente não foi aprovado")
}

/* 🐉 2. Dragões e Condições História: Um guerreiro encontrou um dragão! 
Se ele tiver uma espada mágica e mais de 18 anos, ele pode lutar. Se não, deve fugir. 
Desafio: Crie um programa que receba: let idade; let temEspadaMagica; 
E exiba: "Você pode lutar contra o dragão!" ou "Fuja enquanto é tempo!"*/

let idade = Number(prompt("Digite sua idade"))
let espadaMagica = prompt("Você tem uma espada mágica?(sim/não)")

if(idade > 18 && espadaMagica == "sim"){
    console.log("Você pode lutar com o dragão!")
} else {
    console.log("Fuja enquanto é tempo!")
}

// com operador ternário: 

// let idade = Number(prompt("Digite sua idade"));
// let espadaMagica = prompt("Você tem uma espada mágica?(sim/não)");

// (idade > 18 && espadaMagica == "sim") 
//     ? console.log("Você pode lutar com o dragão!") 
//     : console.log("Fuja enquanto é tempo!");

/* 🎒 19. Lista de Material Escolar História: Se a criança for do ensino fundamental, 
precisa levar lápis. Se for do médio, leva caneta. Se for outro, leva ambos! Desafio: 
let tipoEnsino = "fundamental"; Use if/else para mostrar o material adequado.*/

let tipoEnsino = prompt("Qual é o seu tipo de ensino?\n(Fundamental, Médio, Outro)") // precisa do html ne

if(tipoEnsino == "Fundamental"){
    console.log("Você precisa levar lápis")
}
else if(tipoEnsino == "Médio"){
    console.log("Você precisa levar caneta")
}
else{
    console.log("Você precisa levar lápis e caneta!")
}


// While = Mais simples quando não sabe quantas vezes vai repetir ( mais flexivel q o for)

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

    // Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de 18 ou estudante.

function meiaEntrada(){

    let idade = Number(prompt("Qual a sua idade?"))
    let estudante = prompt("Você é estudante? Sim ou Não") == "Sim" ? true : false
    

    while(estudante == false && idade > 18){

        idade = Number(prompt("Digite a sua idade: "))
        estudante = prompt("Você é estudante? Sim ou Não") == "Sim" ? true : false
    }
    alert("Você tem direito a meia entrada!")
}

//Mostre apenas os números pares de 1 a 20

let ii = 2

while(i <= 20){
    console.log(i)
    ii += 2 // // aq ele funciona pq esse i+= 2 diz q vai adicionando de 2 em dois ne
} 

// o for com esse mesmo exemplo 

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// for — Mais compacto quando sabe quantas vezes vai repetir

// Imprima todos os números de 1 a 100 que são pares e múltiplos de 3.

function numerosParesMultiplos3(){

    for(let i=1; i <=100; i++){
        if(i % 2 == 0 && i % 3 == 0){
            console.log(i)
        }
    }
}

//Imprima os números de 1 a 50 que são ímpares ou múltiplos de 7.

function numerosImparesMultiplos7(){

    for(let i=1; i <=50; i++){
        if(i % 2 != 0 || i % 7 == 0){
            console.log(i)
        }
    }
}

// Array -> Um array é uma lista ordenada de valores, que podem ser números, strings, objetos, etc.

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]); // banana 

// 🧠 Coisas importantes:
    // Os índices começam em 0.

        // Pode adicionar elementos com .push():

frutas.push("uva"); // ["maçã", "banana", "laranja", "uva"]

        // Pode remover com .pop() (último) ou .splice():

frutas.pop(); // remove "uva"
frutas.splice(1, 1); // remove "banana" --> 1° 1: posição do elemento ; 2° 1: quantos elementos vai remover 

// Exemplos: 

const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

        // Exercício 1: Ordenar os nomes em ordem alfabética.

nomes.sort(); 
console.log(nomes); // Resultado: ["Ana", "Beatriz", "Bruno", "Carlos", "Daniel", "Eduarda"]

        // Exercício 2: Filtrar os nomes com mais de 5 letras.

const nomesMaisDe5Letras = nomes.filter(nome => nome.length > 5);
console.log(nomesMaisDe5Letras); 


// Objetos: Um objeto é um conjunto de pares chave:valor, tipo um "dicionário".

let pessoa = {
    nome: "Emilie",
    idade: 17,
    temEspadaMagica: true
};

console.log(pessoa.nome); // Emilie
console.log(pessoa["idade"]); // 17

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


//  Localstorage --> É uma memória do navegador que guarda dados mesmo depois de recarregar a página.

// 🧠 Importante:
// Só armazena strings (textos), então se quiser guardar arrays/objetos, tem que usar JSON.


    // 🟨 Armazenar:
localStorage.setItem("nome", "Emilie");

    //🟨 Pegar o dado:
let nome = localStorage.getItem("nome");

    //🟨 Remover:
localStorage.removeItem("nome");

    // 🟨 Limpar tudo:
localStorage.clear();

    //🟨 Guardar objeto ou array:
let aluno1 = { nome: "João", idade: 16 };
localStorage.setItem("aluno", JSON.stringify(aluno1));

    // 🟨 Recuperar objeto/array:
let aluno = JSON.parse(localStorage.getItem("aluno"));
console.log(aluno.nome);



// Salvar no localStorage
localStorage.setItem("nome", "Ana")

// Ler do localStorage
let nomeUsuario = localStorage.getItem("nome")
console.log(nomeUsuario)  // "Ana"








// diferença de array e objetos

// array com objeto: 
// const alunos = [
//   { nome: "Ana", media: 7.5 },
//   { nome: "Carlos", media: 5.8 },
//   { nome: "Beatriz", media: 8 },
//   { nome: "João", media: 6 }
// ];

// só array: const alunos = ["Ana", "Carlos", "Beatriz", "João"];

// só objeto:

// const pessoa = {
//   nome: "Lucas",
//   idade: 22,
//   cidade: "Rio de Janeiro"
// };

// console.log(pessoa.nome); // Lucas