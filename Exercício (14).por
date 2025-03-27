  //Em uma festa de família alemã, 45 pessoas foram convidadas para beber. 
  //Para tanto, foram comprados 300 litros de chopp. Criar um programa que 
  //calcule a média de litros bebidos por pessoa, considerando ainda a quantidade 
  //de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. 
  //Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício 
  //e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro pessoasConvidadas = 45 
  inteiro choppComprado = 300
  inteiro choppDesperdicado, choppSobrou , choppConsumido 
  real mediaLitrosBebidos

  // Entrada de Dados 
  escreva("Digite o número de chopp desperdiçado(litros): ")
  leia(choppDesperdicado)

  escreva("Digite o número de chopp que sobrou(litros): ")
  leia(choppSobrou) 

  escreva("(Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos)" + "\n")
  

  // Processamento, Cálculo, Lógica
  choppConsumido = choppComprado - choppDesperdicado - choppSobrou
  mediaLitrosBebidos = choppConsumido / pessoasConvidadas

  // Saída de dados
  escreva("A média de litros bebidos por pessoas na festa foi de: ", mediaLitrosBebidos)






  }
}
