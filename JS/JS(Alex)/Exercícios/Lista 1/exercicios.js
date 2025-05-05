function ex1(){
    let nomeUsuario = prompt("Digite seu nome: ")
    alert(`Olá ${nomeUsuario}, seja bem-vindo(a)!`)
}

function ex2(){
    let num1 = Number(prompt("Digite o primeiro número:")) 
    let num2 = Number(prompt("Digite o segundo número:"))
    let soma = num1 + num2
    alert(`A soma dos dois números é: ${soma}`)
}

function ex3(){
    let tempCelsius = Number(prompt("Digite a temperatura em Celsius:"))
    let tempFahrenheit = (tempCelsius * 9/5) + 32
    alert(`A temperatura em Fahrenheit é: ${tempFahrenheit}`)
}

function ex4(){
    let num1 = Number(prompt("Digite um número:"))

    if(num1 % 2 == 0){
        alert("O número é par.")
    }
    else{
        alert("O número é ímpar.")
    }
}

function ex5(){
    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))
    let num3 = Number(prompt("Digite o terceiro número:"))
    let media = (num1 + num2 + num3) / 3
    alert(`A média dos três números é:  + ${media}`)
}

function ex6(){
    let peso = Number(prompt("Digite o seu peso(kg):"))
    let altura = Number(prompt("Digite a sua altura(m):"))
    let imc = peso / altura ** 2
    alert(`Seu IMC é: ${imc}`)

    if(imc < 18.5){
        alert("Você está abaixo do peso.")
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert("Você está com o peso normal.")
    }
    else if(imc >= 25 && imc <= 29.9){
        alert("Você está com sobrepeso.")
    }
    else{
        alert("Você está obeso.")
    }}

function ex7(){
    let num1 = Number(prompt("Digite um número:"))
    alert(`Opa, esse exercício ainda está em construção, pedimos desculpas!`)
    }

function ex8(){
    let ano = Number(prompt("Digite um ano:"))
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
        alert(`${ano} é um ano bissexto.`)
    }
    else{
        alert(`${ano} não é um ano bissexto.`)
    }}