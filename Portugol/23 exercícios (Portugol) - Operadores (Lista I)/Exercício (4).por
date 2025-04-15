  // Desenvolva um programa que pergunte ao usuário o salário bruto e calcule 
  // o salário líquido, considerando um desconto de 20% para impostos.


programa {
  funcao inicio() {
    

  // Declaração de variáveis
  real salarioBruto, salarioLiquido
  real percentualDesconto = 20 
  real valorDesconto 

  // Entrada de Dados 
  escreva("Digite aqui seu sálario bruto (R$): ")
  leia(salarioBruto)


  // Processamento, Cálculo, Lógica
  valorDesconto = salarioBruto * percentualDesconto / 100
  salarioLiquido = salarioBruto - valorDesconto

  // Saída de dados
  escreva("Valor do desconto (20%): R$", valorDesconto, "\n")
  escreva("Aqui está seu salário líquido R$:" , salarioLiquido)




  }
}
