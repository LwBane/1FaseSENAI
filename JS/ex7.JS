/*🧃 7. O Robô do Café : Um robô serve café conforme o pedido. Ele só aceita "café", 
"capuccino" ou "expresso". Qualquer outro pedido, ele responde educadamente. Desafio: let pedido; 
Responda com: "Servindo café ☕ " "Servindo capuccino 🧋 " "Servindo expresso 🔥 " "Desculpe, não temos esse tipo de café 😔 "*/

let pedido = prompt("Qual seria seu pedido?\nTemos as opções: café, capuccino ou expresso")

if(pedido == "café"){
    console.log("Jájá servindo o seu café")
    }

else if(pedido == "capuccino"){
    console.log("Jájá servindo o seu capuccino")
    }

else if(pedido == "expresso"){
    console.log("Jájá servindo o seu expresso")
        
}else{
    console.log("Desculpe, infelizmente não temos esse tipo de café")
}