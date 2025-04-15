/*let idade = prompt("Digite sua idade")

console.log(idade)

if(idade >=18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
*/

/*let num1 = Number(prompt('Digite um número'))
let num2 = Number(prompt('Digite um número'))

console.log("A soma é: ", num1 + num2)*/

// Pegar 4 notas com o prompt
// Calcula a média 
// IF E ELSE para dizer aprovado/reprovado 

let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite um número"))
let num3 = Number(prompt("Digite um número"))
let num4 = Number(prompt("Digite um número"))

media = (num1+num2+num3+num4) / 4

console.log("A média é de:", media)

if(media >= 7){
    console.log("Você foi aprovado, parabéns :)")
} else {
    console.log("Você infelizmente foi reprovado :/")
}
