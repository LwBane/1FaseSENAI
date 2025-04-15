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
