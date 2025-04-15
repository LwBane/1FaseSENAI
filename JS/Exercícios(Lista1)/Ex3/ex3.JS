/* 🍕 3. A Pizzaria do Código História: João quer pedir pizza, mas só se: 
Ele tiver dinheiro e estiver com fome. Ou se for sexta-feira (porque é tradição!)
Desafio: let temDinheiro; let estaComFome; let hojeEhSexta; 
Exiba: "Vamos pedir pizza!" ou "Hoje não é dia de pizza."*/

let dinheiro = prompt("Você possui dinheiro? (sim/não)")
let fome = prompt("Você está com fome? (sim/não)")
let dia = prompt("Hoje é sexta-feira? (sim/não)")

if ((dinheiro == "sim" && fome == "sim" || dia == "sim")){
    console.log("Vamos pedir pizza!")
} else {
    if(dia == "não"){
        console.log("Hoje não é dia da pizza")
    }
}