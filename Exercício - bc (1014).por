//Calcule o consumo médio de um automóvel sendo fornecidos a 
//distância total percorrida (em Km) e o total de combustível gasto (em litros).

programa {
  funcao inicio() {
    
  // Declaração de variáveis
  real distanciaPercorrida , combustivelGasto , consumoMedio

  // Entrada de Dados 
  escreva("Digite a distância total percorrida(km): ")
  leia(distanciaPercorrida)

  escreva("Digite o total de combustível gasto(litros): ")
  leia(combustivelGasto)


  // Processamento, Cálculo, Lógica
  consumoMedio = distanciaPercorrida/combustivelGasto

  // Saída de dados
  escreva("O consumo médio do automóvel é de: " + consumoMedio + "km/l")



  }
}
