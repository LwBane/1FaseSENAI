//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
//o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro codigo1, numeroPecas1, codigo2, numeroPecas2 
  real valor1, valor2 , valorPago 

  // Entrada de Dados 
  escreva("Digite aqui o código da peça 1: ")
  leia(codigo1)

  escreva("Digite o número de peças 1: ")
  leia(numeroPecas1)

  escreva("Digite o valor unitário de cada peça 1: ")
  leia(valor1)


  escreva("Digite aqui o código da peça 2: ")
  leia(codigo2)

  escreva("Digite o número de peças 2: ")
  leia(numeroPecas2)

  escreva("Digite o valor unitário de cada peça 2: ")
  leia(valor2)

  // Processamento, Cálculo, Lógica
  valorPago = numeroPecas1*valor1 + numeroPecas2*valor2

  // Saída de dados
  escreva("O valor a ser pago será de: R$ " + valorPago)







  }
}
