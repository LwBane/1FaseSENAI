/* ⛷ 18. Esqui na Montanha História: A pista de esqui está liberada apenas para maiores de 16 anos 
e que tenham equipamento completo. Desafio: let idade; let temEquipamento; Exiba: "Pode esquiar 🎿 " ou "Não liberado."*/

let idade = Number(prompt("Digite sua idade:"))
let equipamento = prompt("Você tem equipamento completo? (Sim/Não)")

if(idade >= 16 && equipamento == "Sim"){
    console.log("Você pode esquiar!")
}else{
     console.log("Infelizmente você não foi liberado.")
}

