let senha = "Exemplo123"
let tentativas = 1 
// let acertou = false 

while(tentativas <= 3){ // while(tentivas <=3 && acertou == false)
    let senhaTentavia = prompt("Digite a senha:")
    if(senhaTentavia == senha){
        alert("Usuário logado com sucesso!")
        break // ou tentativas = 4 pra encerrar a repetição ou acertou = true
    }else{
        let tentativaSobrando = 3 - tentativas
        alert("Senha incorreta! Você tem mais " + tentativaSobrando + " tentativas.")
        tentativas++
    }
}