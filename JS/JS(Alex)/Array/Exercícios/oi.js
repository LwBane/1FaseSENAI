//ex 12

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosDois = numeros.map(elemento => elemento * 2)
console.log(numeros)
console.log(numerosDois)


//ex 14

let soma = numeros.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0)
console.log(soma)

let nomes = ['João', 'Clara', 'Jonas', 'Carla', 'Maria', 'Alessandro']
let nomesVirgula = nomes.reduce((acumulado, valorAtual) => acumulado + ', ' + valorAtual)
console.log(nomesVirgula)

let numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosInvertidos = numeros2.map((elemento => elemento)).reverse()

console.log(numeros2)
console.log(numerosInvertidos)




