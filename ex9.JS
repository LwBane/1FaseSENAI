/*🎁 9. Presente Secreto - História: Você entrou em um jogo de presente secreto. 
Se você tirou "Carlos", você deve comprar um livro. Se tirou "Ana", um chocolate. Qualquer outro nome, 
um presente surpresa! Desafio: let nomeSorteado; Resultado esperado: "Compre um livro 📚 " 
"Compre um chocolate 🍫 " "Compre um presente surpresa 🎁 "*/

let nomeSorteado = prompt("Qual foi o nome que você tirou no sorteio?")

if(nomeSorteado == "Carlos"){
    console.log("Você deve comprar um livro!")
}else if(nomeSorteado == "Ana"){
    console.log("Você deve comprar um chocolate!")
}else{
    console.log("Compre um presente surpresa!")
}