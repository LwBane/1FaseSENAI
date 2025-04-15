//Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

programa {
  funcao inicio() {
    

  // Declaração de variáveis
  real horas 
  real minutos 
  real segundos

  // Entrada de Dados 
  escreva("Que horas são? ")
  leia(horas)

  // Processamento, Cálculo, Lógica 
  minutos = horas * 60 
  segundos = minutos * 60

  // Saída de dados 
    escreva("\nSão: " , horas , " horas\n")
    escreva(minutos, " minutos\n")
    escreva(segundos, " segundos\n")


  }
}
