let numeroDigitado = Number(prompt("Digite um número:"))
let digito = 0 
let contador = 1

while(contador < String(numeroDigitado).length){
    digito++
    contador++
}
alert("Digitos: " + digito)