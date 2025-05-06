//Mostre todos os divisores de um número X (por exemplo, 24)

let numero = Number(prompt("Digite um número:"))
let i = 1
let valores = ""
while(numero >=1 && i <= numero){
    if(numero % i == 0){
        console.log(i)
        valores += i + ", "
    }
    i++
}
novo =""
j = 0
while(j < valores.length - 2){
novo += valores.charAt(j) 
j++
}
alert("Os divisores de " + numero + " são: " + novo
)
