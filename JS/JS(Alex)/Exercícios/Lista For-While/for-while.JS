// Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de 18 ou estudante.

function meiaEntrada(){

    let idade = Number(prompt("Qual a sua idade?"))
    let estudante = prompt("Você é estudante? Sim ou Não") == "Sim" ? true : false
    

    while(estudante == false && idade > 18){

        idade = Number(prompt("Digite a sua idade: "))
        estudante = prompt("Você é estudante? Sim ou Não") == "Sim" ? true : false
    }
    alert("Você tem direito a meia entrada!")
}

// Imprima todos os números de 1 a 100 que são pares e múltiplos de 3.

function numerosParesMultiplos3(){

    for(let i=1; i <=100; i++){
        if(i % 2 == 0 && i % 3 == 0){
            console.log(i)
        }
    }
}