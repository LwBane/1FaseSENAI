const usuario = {
    nome: "Alex",
    idade: 22
}

const endereco = "Florianópolis, SC"

localStorage.setItem("usuario", endereco);
localStorage.setItem("usuario", JSON.stringify(usuario));

console.log(JSON.parse(localStorage.getItem("Usuário")));
console.log(localStorage.getItem("endereco"));

//Exemplo real 

const usuarios = JSON.parse(localStorage.getItem("usuarios"));

if (usuarios) {

    usuarios.map((usuario) => {

    let div = document.createElement("div");

    let htmlNome = document.createElement("p");
    htmlNome.textContent = usuario.nome;

    let htmlIdade = document.createElement("p");
    htmlIdade.textContent = usuario.Idade;
})
}

function cadastrar(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let usuario = lolcalStorage.getItem("usuarios")

    if(usuarios){
        let usuariosConvertido = JSON.parse(usuarios)

        let novoUsuario = { 
            nome: nome,
            idade: idade
        }
        usuariosConvertido.push(novoUsuario);
        lolcalStorage.setItem("usuarios", JSON.stringify(usuariosConvertido));
    }
    else{
        let novoUsuario = {
            nome: nome,
            idade: idade
        }
        let usuarios = [novoUsuario]
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}
