/* 🐶 14. Passeio com o Pet História: Você só vai passear com seu cachorro se não estiver chovendo e se tiver tempo. 
Desafio: let estaChovendo; let temTempo; Exiba: "Hora do passeio! 🐾 " ou "Hoje não vai dar... ☔ "*/

let chuva = prompt("Está chovendo?")
let tempo = prompt("Você tem tempo para passear com seu cachorro?")

if(chuva == "Não" && tempo == "Sim"){
    console.log("Hora do passeio então :D")
}else{
    console.log("Hoje infelizmente não vai dar :(")
}