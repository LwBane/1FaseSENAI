  // Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo e mostrar o resultado na tela.


programa {
  funcao inicio() {
    

  // Declaração de variáveis
  real peso, altura 
  real calculoIMC

  // Entrada de Dados 
  escreva("Digite aqui o seu peso: ")
  leia(peso)

  escreva("Digite aqui sua altura: ")
  leia(altura)

  
  // Processamento, Cálculo, Lógica
  calculoIMC = peso / (altura * altura)

  // Saída de dados
  escreva("O seu IMC é de: " , calculoIMC)


  }
}
