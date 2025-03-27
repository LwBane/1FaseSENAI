// Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de 
//público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar 
//para cada 150 pessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e 
//bares seriam necessários.




programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro banheiro , bar 
  inteiro publicoEsperado 
  inteiro mediaBanheiros , mediaBares 

  // Entrada de Dados 
  escreva("Digite aqui o público esperado: ")
  leia(publicoEsperado) 

  // Processamento, Cálculo, Lógica
  mediaBanheiros = 1 * (publicoEsperado/50)
  mediaBares = 1 * (publicoEsperado/150)


  // Saída de dados
  escreva("Em média, o número de banheiros deverá ser de: ", mediaBanheiros, "\n")
  escreva("Já o número de bares em média deverá ser de: ", mediaBares)




  }
}
