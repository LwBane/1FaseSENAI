function somar(){
    let n1, n2, soma 

    n1 = Number(prompt("Digite o primeiro número:"))      //Mais comum fazer assim 
    n2 = Number(prompt("Digite o segundo número:"))      //Podia converter aqui: n2 = prompt("Segundo número:"), dai em baixo: n2 = numer(n2)

    soma = n1 + n2                                      //Ou podia converter pra número aqui, tipo: soma = Number(n1) + Number(n2) 

    alert("A soma é: " + soma)
}

function subtrair(){
    let n1, n2, subtracao

    n1 = Number(prompt("Digite o primeiro número:"))
    n2 = Number(prompt("Digite o segundo número:"))

    subtracao = n1 - n2

    alert("A subtração é: " + subtracao)
}