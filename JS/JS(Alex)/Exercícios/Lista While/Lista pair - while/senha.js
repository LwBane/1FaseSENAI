let senha = "Exemplo123"
let tentativas = 1 

while(tentativas <= 3){
    let senhaTentavia = prompt("Digite a senha:")
    if(senhaTentavia == senha){
        alert("Usuário logado com sucesso!")
        break
    }else{
        let tentativaSobrando = 3 - tentativas
        alert("Senha incorreta! Você tem mais " + tentativaSobrando + " tentativas.")
        tentativas++
    }
}