function ex1(){
    let mensagem = prompt("Digite um texto: ")
    let simbolos = {
        "a": "@",
        "e": "#",
        "i": "!",
        "o": "$",
        "u": "*"
    }
    let mensagemCodificada = ""
    for(let letra of mensagem){
        if(simbolos[letra]){
            mensagemCodificada += simbolos[letra]
        }else{
            mensagemCodificada += letra
        }
    }
    alert(`Mensagem codificada: ${mensagemCodificada}`)
}

function ex2(){
    let nome = prompt("Digite seu nome:")
}

function ex3(){
    let signo = prompt("Digite seu signo:")
}

function ex4(){
    let escolha = prompt("Escolha par ou ímpar:")
    let numJogador = Number(prompt("Digite um número:"))

    let soma = numJogador 

    if(soma % 2 == 0){
        alert("O número é par.")
    }
    else{
        alert("O número é ímpar.")
    }
}

function ex5(){
    
  }