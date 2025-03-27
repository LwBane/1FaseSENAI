 // Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. 
 // Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.



programa {
  funcao inicio() {
    
  // Declaração de Variáveis 
  inteiro horaSemana1
  inteiro horaSemana2
  inteiro horaSemana3
  inteiro horaSemana4
  inteiro totaldehoras
  real mediaDeHorasPorSemana
    
  // Entrada de dados 
  escreva("Digite as horas estudadas na semana 1: ")
  leia(horaSemana1)

  escreva("Digite as horas estudadas na semana 2: ")
  leia(horaSemana2)

  escreva("Digite as horas estudadas na semana 3: ")
  leia(horaSemana3)

  escreva("Digite as horas estudadas na semana 4: ")
  leia(horaSemana4)

  // Processamento, Cálculo, Lógica 
  totaldehoras = horaSemana1 + horaSemana2 + horaSemana3 + horaSemana4
  mediaDeHorasPorSemana = totaldehoras / 4

  // Saída de Dados 
  escreva("A média de horas por semana que você estudou programação foi de: " , mediaDeHorasPorSemana , " horas. \n Parabéns pelo seu esforço ;)")



  }
}
