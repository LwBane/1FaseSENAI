let n1 = Number(prompt("Digite o 1° Número: "))
let n2 = Number(prompt("Digite o 2° Número: "))

let operacao = prompt("Qual operação você deseja realizar?\n (1) Soma; (2) Multiplicação; (3) Subtração; (4) Divisão")

if(operacao == "1"){
    soma = n1+n2
    console.log("A soma do número " + n1 + " e do número " + n2 + " é igual a: " + soma)
}
else if(operacao == "2"){
    multiplicacao = n1*n2 
    console.log("A multiplicação do número " + n1 + " e do número " + n2 + " é igual a: " + multiplicacao)
}
else if(operacao == "3"){
    subtracao = n1-n2 
    console.log("A subtração do número " + n1 + " e do número " + n2 + " é igual a: " + subtracao)
}
else if(operacao == "4"){
    divisao = n1/n2 
    console.log("A divisão do número " + n1 + " e do número " + n2 + " é igual a: " + divisao)
}else{
    console.log("Essa operação não existe!")
}