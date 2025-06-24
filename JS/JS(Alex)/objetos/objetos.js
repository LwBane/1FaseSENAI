//literal 

let meuObjeto = {}
let meuObjetoValorPadrao = {nome: "Alex", idade: 22}

//atribuição direta 

meuObjeto.nome = "Alex"
meuObjeto.idade = 22

// utilizando new object --> raramente utilizado

let obj = new Object()

// propriedades e metodos 

let aluno = {nome: "Alex", apresentar: function(){ return `Olá meu nome é: ${this.nome}`}}

// acessando e modificando 

let objeto = {nome: "Gol", "numero-chassi": 123}
objeto.nome = "Chassi"
objeto["numero-chassi"]

// metodo de edição 

let pessoa = {
nome: "Alex",
apresentar: function(){
    console.log(`Olá meu nome é: ${this.nome}`)
}, 
editar:  function(){
    let novoNome = prompt("Digite o novo nome:")
    this.nome = novoNome
    }

}
