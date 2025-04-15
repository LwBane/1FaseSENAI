/* 🎒 19. Lista de Material Escolar História: Se a criança for do ensino fundamental, 
precisa levar lápis. Se for do médio, leva caneta. Se for outro, leva ambos! Desafio: 
let tipoEnsino = "fundamental"; Use if/else para mostrar o material adequado.*/

let tipoEnsino = prompt("Qual é o seu tipo de ensino?\n(Fundamental, Médio, Outro)")

if(tipoEnsino == "Fundamental"){
    console.log("Você precisa levar lápis")
}
else if(tipoEnsino == "Médio"){
    console.log("Você precisa levar caneta")
}
else{
    console.log("Você precisa levar lápis e caneta!")
}
