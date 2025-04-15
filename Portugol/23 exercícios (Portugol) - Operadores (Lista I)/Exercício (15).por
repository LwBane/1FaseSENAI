// Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. 
// O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. 
// Digitar os valores (em metros) da largura e comprimento que deseja a piscina. 
// Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, 
// sendo que uma caixa de azulejo com 60 unidades custa R$45,50.



programa {
  funcao inicio() {
    
  // Declaração de variáveis
  real larguraPiscina , comprimentoPiscina 
  real calculoArea
  real numeroAzulejo
  real caixaAzulejo = 45.50
  real valorAzulejo 
  

  // Entrada de Dados 
  escreva("Digite aqui a largura que deseja na piscina(metros): ")
  leia(larguraPiscina)

  escreva("Digite aqui o comprimento que deseja na piscina(metros): ")
  leia(comprimentoPiscina)


  // Processamento, Cálculo, Lógica
  calculoArea = larguraPiscina * comprimentoPiscina 
  numeroAzulejo = calculoArea * 120
  valorAzulejo = (numeroAzulejo/60) * caixaAzulejo

  // Saída de dados
  escreva("O número de azulejos que devem ser comprados é de ", numeroAzulejo, ", resultando em um valor de R$:",valorAzulejo )



  }
}
