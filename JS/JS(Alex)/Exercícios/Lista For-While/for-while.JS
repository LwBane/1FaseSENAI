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
