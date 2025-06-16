//ex 13 

let numeros = [23, 3, 5, 6, 4, 2, 55, 90, 45, 40, 30, 20, 10]

let numerosPares = numeros.filter(numero => numero % 2 === 0)

console.log(numerosPares) 

//ex 15 (Enconte o maior número de um array)

let numeros2 = [23, 3, 5, 6, 4, 2, 55, 90, 45, 40, 30, 20, 10]

let menorNumero = Math.min(...numeros2) //spread
console.log(menorNumero)


//ex 18 (junte dois arrays em um só, usando .concat() ou spread[...])

let array1 = ['teste1', 'teste2']
let array2 = ['teste3', 'teste4']
let arrayJuntao= [...array1, ...array2]
console.log(arrayJuntao)

//ex 19. Ordene um array de strings em ordem alfabética 

let palavras = ['casa', 'banana', 'abacate'];
palavras.sort()

console.log(palavras)

//ex 20. Ordene um array de números do maior para o menor 

let numeros3 = [10,20,1000,90,50,60]
let numeros3Desc = [] 
for(let i = 0; i<numeros3.length; i++){
    if( numeros3Desc[i+1] > numeros3[i]) {
        numeros3Desc[i] = numeros3[i]
    }
}

console.log(numeros3Desc)
numeros3.sort((a,b) => a-b)                         
console.log(numeros3)

//ex 21 (remova valores duplicados de um array)
let valores = ['Alex', 'Alex', 'Pedro', 'Pedro', 'Maria', 'Maria']
let removerDuplicados = new Set([...valores])
console.log(removerDuplicados)

let novoArray = [... removerDuplicados]
console.log(novoArray)

//ex 22 -> quantas vezes um valor aparece em um array 
let valores2 = ['Alex', 'Alex', 'Pedro', 'Pedro', 'Maria', 'Maria']
let contador = 0 
for(let i=0; i < valores.length; i++){
    if(valores2[i] == "Alex"){
        contador ++
    }
}
let quantasVezesApareceAlex = valores2.filter(valor => valor === "Alex").length
console.log(contador, quantasVezesApareceAlex)

//23 

let usuarios = ['Alex', 'Joana', 'Carlos', 'João', 'Claudia', 'Maria']
console.log(usuarios.join(', '))

//24 

let frutas = ['Abacaxi', 'Laranja', 'Kiwi', 'Banana', 'Banana', 'Maçã']
let frutasNovo = frutas.map(fruta => fruta === "Banana" ? "Maçã" : fruta) // ? if : else 
console.log(frutasNovo)

//25 Encontre o índice de um valor específico em um .indexOf().

let frutas2 = ['Abacaxi', 'Laranja', 'Kiwi', 'Banana', 'Caqui', 'Maçã']
console.log(frutas2.indexOf("Kiwi"))

//26 Crie um novo array contento apenas as strings de um array com tipos mistos 

let mistos = ["Abacaxi", "Laranja", 34, 322]
let strings = mistos.filter(valor => typeof valor === "string")
console.log(strings)
