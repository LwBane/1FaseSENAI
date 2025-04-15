//Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, 
//o valor que recebe por hora e calcula o salário desse funcionário. 
//A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

programa {
  funcao inicio() {
    

  // Declaração de variáveis
  inteiro numeroRegistro , horasTrabalhadas
  real valorPorHora
  real salarioFuncionario  

  // Entrada de Dados 
  escreva("Digite aqui seu número de registro: ")
  leia(numeroRegistro)

  escreva("Digite seu número de horas trabalhadas: ")
  leia(horasTrabalhadas)

  escreva("Digite aqui o valor que recebe por hora: ")
  leia(valorPorHora)


  // Processamento, Cálculo, Lógica
  salarioFuncionario = horasTrabalhadas * valorPorHora

  // Saída de dados
  escreva("O funcionário de registro: " + numeroRegistro + ", tem o salário de R$" + salarioFuncionario)





  }
}
