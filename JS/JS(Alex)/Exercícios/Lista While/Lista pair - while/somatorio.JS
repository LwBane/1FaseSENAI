let contador = 1 
let somatorio = 0

while(contador <= 20){
    let resto = contador % 2
    if(resto ==0){
        somatorio += contador
        alert("O número " + contador + " é par e o somatório é: " + somatorio)
    }
    contador++
}

alert("A soma dos números pares de 1 a 20 é: " + somatorio)