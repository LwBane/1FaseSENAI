//Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. 
//As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro numeroDigitado 
  inteiro dec100, dec50, dec20, dec10, dec5, dec2, dec1 
  inteiro restante 

  // Entrada de Dados 
  escreva("Digite um número inteiro: ")
  leia(numeroDigitado)


  // Processamento, Cálculo, Lógica
  dec100 = numeroDigitado/100
  restante = numeroDigitado - dec100*100
  dec50 = restante/50 
  restante = restante - dec50*50
  dec20 = restante/20 
  restante = restante - dec20*20 
  dec10 = restante/10 
  restante = restante - dec10*10
  dec2 = restante/2 
  restante = restante - dec2*2 
  dec1 = restante/1

  // Saída de dados
  escreva(dec100 , " nota(s) de R$100,00" + "\n" + dec50 , " nota(s) de R$50,00" + 
  "\n" + dec20 , " nota(s) de R$20,00" + "\n" + dec10 , " nota(s) de R$10,00" + "\n" + dec2 , " nota(s) de R$2,00" 
  + "\n" + dec1 , " nota(s) de R$1,00")


  }
}
