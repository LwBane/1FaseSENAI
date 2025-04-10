/* 🎈 13. Festa VIP História: Só entra na festa VIP quem estiver na lista de convidados 
e trouxer convite. Desafio: let nome = "Joana"; let temConvite = true; Use if/else para 
dizer se pode entrar ou não.*/

let nome = prompt("Digite seu nome")
let convite = prompt("Você possui convite? Sim(1) / Não(0)") 

if(nome == "Joana" && convite == true || convite == "Sim"){
    console.log("Você pode entrar na festa")
}else{
    console.log("Você não pode entrar na festa")
}