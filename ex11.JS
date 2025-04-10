/* 🎬 11. Sessão de Cinema História: A entrada no cinema é gratuita para crianças 
até 12 anos ou idosos acima de 60. Desafio: let idade; Exiba: 
"Entrada gratuita 🎟 " ou "Precisa pagar ingresso 💳 "*/

let idade = Number(prompt("Qual é a sua idade?"))

if(idade <=12 || idade > 60){
    console.log("Sua entrada é gratuita")
}else{
    console.log("Você precisa pagar o ingresso")
}