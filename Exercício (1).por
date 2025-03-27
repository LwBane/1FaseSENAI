  // 1) Programar as seguintes entradas de dados de um cliente: 
  // Nome, idade, nacionalidade, endereço. Após digitados os dados, 
  // mostrar na tela a seguinte mensagem "Cliente [Nome], [idade] anos, 
  // [nacionalidade], reside no endereço [endereço]." 
  // Exemplo: Cliente Lucas, 29 anos, brasileiro, 
  // reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.


programa {
  funcao inicio() {
    

  // Declaração de Variáveis 
  cadeia nome
  inteiro idade
  cadeia nacionalidade 
  cadeia endereco 

  // Entrada de dados 
  escreva("Digite seu nome:")
  leia (nome)

  escreva("Digite sua idade: ")
  leia (idade)

  escreva("Digite sua nacionalidade: ")
  leia (nacionalidade)

  escreva("Digite seu endereço: ")
  leia(endereco)

 // Saída de Dados 
 escreva("O cliente " , nome , "," , " possui " , idade , " anos, ", "é " ,  nacionalidade , " e reside no endereço " , endereco)


  }
}
