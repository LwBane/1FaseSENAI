let numeroSecreto = Math.floor(Math.random() * 100) // Gera um número aleatório entre 1 e 100
console.log(numeroSecreto)
let numeroDigitado = 0 

while(numeroDigitado !== numeroSecreto){
    numeroDigitado = Number(prompt("Digite um número:"))
    if(numeroDigitado === numeroSecreto){
        alert("Você acertou!")

    }else if(numeroDigitado < numeroSecreto){
        alert("O número é maior!")

    }else if(numeroDigitado > numeroSecreto){
        alert("O número é menor!")

    }else{
        alert("Número inválido!")
    }
}