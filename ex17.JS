/* 🧪 17. Laboratório de Comparações História: Você está testando o 
comportamento de operadores string e number. Desafio: let valor1  "100"; 
let valor2  100; == e === em uma variável Compare com == e === , e explique o resultado com console.log()*/

let valor1 = "100"
let valor2 = 100 

comparação1 = valor1 == valor2 // true (valores iguais)
comparação2 = valor1 === valor2 // false(como os tipos são diferente(string e number))

console.log("O resultado da comparação 1 (==):", comparação1 ,
     "pois o operador == compara apenas o valor, não o tipo")
console.log("O resultado da comparação 2 (===):", comparação2 ,
     "pois o operador === compara tanto o valor quanto o tipo, e eles são diferentes (string e number)") 