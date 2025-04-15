  // Faça um programa onde o usuário deve digitar a temperatura em graus Celsius e mostrar na tela essa temperatura convertida em Fahrenheit.


programa {
  funcao inicio() {
    
  // Declaração de Variáveis 
  real temperaturaEmCelsius
  real temperaturaEmFahrenheit

  // Entrada de dados 
  escreva("Qual a temperatura atual? ")
  leia(temperaturaEmCelsius)

  // Processamento, Cálculo, Lógica 
  temperaturaEmFahrenheit = temperaturaEmCelsius * 1.8 + 32 

  // Saída de dados 
  escreva("A temperatura em Fahrenheit é: " , temperaturaEmFahrenheit , "°F")



  }
}
