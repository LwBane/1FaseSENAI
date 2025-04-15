//  Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a 
// velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida
//  (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a 
// mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.


programa {
  funcao inicio() {
    

  // Declaração de variáveis
  real distanciaPercorrida 
  inteiro duracaoTrilha 
  real velocidade

  // Entrada de Dados 
  escreva("Digite aqui a distância percorrida: ")
  leia(distanciaPercorrida)

  escreva("Digite aqui o tempo que a trilha durou: ")
  leia(duracaoTrilha)

  // Processamento, Cálculo, Lógica
  velocidade = distanciaPercorrida/duracaoTrilha

  // Saída de dados
  escreva("Sua média de velocidade durante essa trilha foi de: " , velocidade, "km/h")








  }
}
