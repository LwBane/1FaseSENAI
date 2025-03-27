// Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. 
// Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).


programa {
  funcao inicio() {
    

  // Declaração de Variáveis 
  inteiro arroz
  inteiro batataPalha 
  inteiro suco 
  inteiro valorDaCompra
  inteiro dinheiroDisponivel = 100
  inteiro troco

  // Entrada de dados 
  escreva("Digite o valor do arroz: ")
  leia(arroz)

  escreva("Digite o valor da batata palha: ")
  leia(batataPalha)

  escreva("Digite o valor do suco de garrafa: ")
  leia(suco)

  // Processamento, Cálculo, Lógica 
  valorDaCompra = arroz + batataPalha + suco 
  troco = dinheiroDisponivel - valorDaCompra

  // Saída de Dados 
  escreva("O valor de sua compra deu um total de R$" ,valorDaCompra , "\n")
  escreva("O troco que você receberá é R$" , troco)



  }
}
