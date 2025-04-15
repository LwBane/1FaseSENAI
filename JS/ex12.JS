/* 🧙 ‍ ♀ ️ 12. Poção Misteriosa História: Para preparar uma poção, 
o bruxo precisa misturar exatamente dois ingredientes certos. 
Desafio: let ingrediente1  "pele de sapo"; let ingrediente2  "asa de morcego"; 
Verifique se os ingredientes são exatamente esses. Se forem, diga "Poção pronta!", senão "Mistura errada!"*/

let ingrediente1 = prompt("Qual é o primeiro ingrediente da mistura?")  //"pele de sapo"
let ingrediente2 = prompt("Qual é o primeiro ingrediente da mistura?")  //"asa de morcego"

if (ingrediente1 == "Pele de sapo" && ingrediente2 == "Asa de morcego"){
    console.log("Sua poção está pronta")
}else{
    console.log("Mistura errada! Tente novamente")
}