//Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas 
//efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão 
//sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  cadeia nomeVendedor 
  real salarioFixo 
  inteiro totalVendas , comissao , totalARecerber 

  // Entrada de Dados 
  escreva("Digite o nome do vendedor: ")
  leia(nomeVendedor)

  escreva("Digite aqui seu salário fixo R$")
  leia(salarioFixo)

  escreva("Digite aqui o total de vendas efetuadas pelo vendedor no mês (em dinheiro): ")
  leia(totalVendas) 


  // Processamento, Cálculo, Lógica
  comissao = 0.15*totalVendas 
  totalARecerber = salarioFixo + comissao 

  // Saída de dados
  escreva("O total que o vendedor " + nomeVendedor + " irá receber no final do mês é de: " + totalARecerber + " reais")



  }
}
