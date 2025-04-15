/* 🧃 4. A Máquina de Suco Inteligente História: Uma máquina mágica de sucos aceita o nome 
da fruta e prepara o suco correspondente. Se não reconhecer a fruta, diz que está fora do cardápio. 
Desafio: Use if/else com strings. let fruta; Se fruta for: "laranja" → "Preparando suco de laranja 🍊 " 
"uva" → "Preparando suco de uva 🍇 " "morango" → "Preparando suco de morango 🍓 " 
qualquer outro → "Essa fruta não está disponível 😢 "*/

let fruta = prompt("Qual fruta você deseja? \nTemos as opções: laranja, uva e morango!")

if(fruta == "laranja"){
    console.log("Preparando o suco de laranja")
    }

else if(fruta == "uva"){
    console.log("Preparando o suco de uva")
    }

else if(fruta == "morango"){
    console.log("Preparando o suco de morango")
        
}else{
    console.log("Essa fruta infelizmente não está disponível")
}