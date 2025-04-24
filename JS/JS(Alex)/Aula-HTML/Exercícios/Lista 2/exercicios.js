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

    let min = 1 
    let max = 4

    let numero = Math.floor(Math.random() * (max - min) + min) 

    let frase1 = "Capitão América"
    let frase2 = "Homem de Ferro"
    let frase3 = "Thor"

    if(numero === 1){
        alert(nome + ", você é o " + frase1)
        console.log(nome + ", você é o " + frase1)
    }
    else if(numero === 2){
        alert(nome + ", você é o " + frase2)
    }
    else if(numero === 3){
        alert(nome + ", você é o " + frase3)
}
}

//math .floor = arredonda p baixo 
// 


function ex3(){
    let signo = prompt("Digite seu signo:")

    let min = 1 
    let max = 5

    let numero = Math.floor(Math.random() * (max - min) + min) 

    let frase1 = "hoje é um ótimo dia para você!"
    let frase2 = "cuidado, hoje você deve evitar reuniões, sogras e ex-namorados!"
    let frase3 = "hoje é um bom dia para desacelerar e reavaliar prioridades."
    let frase4 = "o coração pulsa mais forte, mas não se deixe levar por ilusões."

    if(numero === 1){
        alert(signo + ", " + frase1)
    }
    else if(numero === 2){
        alert(signo + ", " + frase2)
    }
    else if(numero === 3){
        alert(signo + ", " + frase3)
    }
    else if(numero === 4){
        alert(signo + ", " + frase4)
}
}

function ex4(){
    let escolha = prompt("Escolha par ou ímpar:").toLowerCase()
    let numJogador = Number(prompt("Digite um número:"))

    let numMaquina = Math.floor(Math.random() * 10)  // math.floor = arredondar números com virgula // math.random = gera um número aleatório entre 0 e 1 // * 10 = gera um número entre 0 e 10 // +1 = para não gerar o número 0
    let soma = numJogador + numMaquina

    alert(`A máquina escolheu o número: ${numMaquina}, você escolheu o número: ${numJogador}`)
    alert(`A soma dos números é: ${soma}`)

    if(soma % 2 == 0 && escolha === "par"){
        alert("Você ganhou!")
    } 
    else if(soma % 2 == 0 && escolha === "impar"){
        alert("Você perdeu!")
    } 
    else if(soma % 2 != 0 && escolha === "impar"){
        alert("Você ganhou")
    } 
    else if(soma % 2 != 0 && escolha === "par"){
        alert("Você perdeu!")
    }
}
// math.ceil = arredonda números pra cima 


function ex5(){

  }