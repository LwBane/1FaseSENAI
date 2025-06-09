// let nome, email, senha 

//  document.getElementById('inpLogNome').focus(); // Foca no campo de nome do login


inicializar()

let usuario = {
    nome: "", 
    email: "", 
    senha: "" 
}

    // Objeto para armazenar os dados do usuário - é oq ta dentro do par de chaves -
    
function cadastrar(){
    usuario.nome = document.getElementById('inpCadNome').value  
    usuario.email = document.getElementById('inpCadEmail').value
    usuario.senha = document.getElementById('inpCadSenha').value
    alert('Cadastro realizado com sucesso!')

    console.log(usuario); // Exibe os dados do usuário no console
    esconderInputs()
    mostrarLogin()
}

function logar(){

    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    if(nome === usuario.nome && senha === usuario.senha){
        alert('Login realizado com sucesso!')
        esconderInputs()
        mostrarProdutos()
    }else{
        alert('Usuário ou senha inválidos!')
    }

}


function mostrarLogin(){
    esconderTodas()
    document.getElementById('login').style.display = 'flex';
    document.getElementById('inpLogNome').focus()
}

function mostrarCadastro(){
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex';
    document.getElementById('inpCadNome').focus(); // Foca no campo de nome do cadastro
}

function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex';
    document.getElementById('navbar').style.display = 'flex';
}

function esconderTodas(){
    document.getElementById('login').style.display = 'none';
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('produtos').style.display = 'none';
    // Esconder novas páginas    
}

function esconderInputs(){
    document.getElementById('inpCadNome').value = ''
    document.getElementById('inpCadEmail').value = ''
    document.getElementById('inpCadSenha').value = ''
    
    document.getElementById('inpLogNome').value = ''
    document.getElementById('inpLogSenha').value = ''
}

function inicializar(){

    mostrarLogin()
    // alert('Seja bem vindo!')

}
 
