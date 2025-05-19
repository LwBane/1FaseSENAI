// Repete enquanto o usuário não tiver idade mínima ou não aceitar os termos 
// idade mínima => 18 anos 

let idadeMinima = 0 
let aceitouTermo = false 

while(aceitouTermo == false || idadeMinima < 18){      //
    idadeMinima = Number(prompt("Qual a sua idade?"))
    let resposta = prompt("Você aceita os termos? Sim ou Não")

    if(resposta === "Sim") aceitouTermo = true
    else aceitouTermo = false
}

alert("Você está inscrito!")  
