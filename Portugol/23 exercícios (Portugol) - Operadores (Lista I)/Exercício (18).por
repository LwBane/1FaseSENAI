//  Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. 
//Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. 
//Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. 
//Mostrar na tela o total a pagar.


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro pessoasDiaria, pessoasCafe , numeroDiarias
  inteiro valorDiaria , valorCafePorPessoa 
  inteiro totalDiaria, totalCafe 
  inteiro totalPagar

  // Entrada de Dados 
  escreva("Informe a quantidade de pessoas que irão: ")
  leia(pessoasDiaria)

  escreva("Informe quantas diárias serão necessárias: ")
  leia(numeroDiarias)

  escreva("Quantas pessoas vão querer o café?: ")
  leia(pessoasCafe)

  // Processamento, Cálculo, Lógica
  valorDiaria = 280
  valorCafePorPessoa = 15 
  totalDiaria = numeroDiarias * valorDiaria
  totalCafe = pessoasCafe * valorCafePorPessoa
  totalPagar = totalDiaria + totalCafe

  // Saída de dados
  escreva("O total a pagar é de R$", totalPagar)





  }
}
