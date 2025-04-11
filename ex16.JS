/* 🧑 ‍ 🍳 16. MasterChef Lógico História: Você precisa preparar um prato especial se o 
ingrediente principal ou o tempero secreto estiver disponível. Desafio: let temIngredientePrincipal; 
let temTemperoSecreto; Exiba: "Prato especial pronto! 🍽 " ou "Sem os ingredientes necessários. 😕 "*/

let ingredientePrincipal = prompt("Você possui o ingrediente principal? (Sim/Não)")
let tempero = prompt("Você possui o tempero secreto? (Sim/Não)") 

if(ingredientePrincipal == "Sim" || tempero == "Sim"){
    console.log("Prato especial pronto!")
}else{
    console.log("Sem os ingredientes necessários.")
}