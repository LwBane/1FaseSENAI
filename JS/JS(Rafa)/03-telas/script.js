// let nome, email, senha 

//  document.getElementById('inpLogNome').focus(); // Foca no campo de nome do login


inicializar()

let usuarios = []

// let nomesTeste = ["Usuario 1", "Usuario 2"]
// Objeto para armazenar os dados do usuário - é oq ta dentro do par de chaves -

function cadastrar(){

    let usuario = {

        nome: document.getElementById('inpCadNome').value,
        email: document.getElementById('inpCadEmail').value,
        senha: document.getElementById('inpCadSenha').value
        
    }
    
    usuarios.push(usuario) // Adiciona o usuário ao array usuarios
    esconderInputs()
    mostrarLogin()
    
    alert('Cadastro realizado com sucesso!')

    console.log(usuarios) // Exibe os dados do usuário no console
}

function logar(){

    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    for(let i=0; i<usuarios.length; i++){
        
        if((nome === usuarios[i].nome || nome === usuarios[i].email) && senha === usuarios[i].senha){
            alert('Login realizado com sucesso! Olá ' + usuarios[i].nome)
            esconderInputs()
            mostrarProdutos()
            // document.getElementById('navbar').style.display = 'block';
            
        }
        
        // else{
        //     alert('Usuário ou senha inválidos!')
        // }

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
 
