/* 🍦 15. Sorveteria Gelada História: O cliente quer um sabor de sorvete. 
Só há: "baunilha", "chocolate" ou "morango". Desafio: let sabor; Use condicionais 
para exibir: "Servindo sorvete de [sabor] 🍦 " Ou "Sabor indisponível 😢 "*/


let sabor = prompt("Qual sabor de sorvete você deseja?\n(Baunilha, Chocolate ou Morango)")

if(sabor == "Baunilha"){
    console.log("Servindo sorvete de baunilha")
}
else if(sabor == "Chocolate"){
    console.log("Servindo sorvete de chocolate")
}
else if(sabor == "Morango"){
    console.log("Servindo sorvete de morango")
}
else{
    console.log("Sabor indisponível, tente outro!")
}