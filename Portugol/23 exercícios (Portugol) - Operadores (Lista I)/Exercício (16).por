// Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, 
// para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km)
// e total de combustível gasto (litros), mostrando o resultado ao final.

programa {
  funcao inicio() {
    
  // Declaração de variáveis
  real distanciaPercorrida , combustivelGasto 
  real consumoCombustivelQuilometragem 

  // Entrada de Dados 
  escreva("Digite aqui a distância percorrida(km): ")
  leia(distanciaPercorrida)

  escreva("Digite aqui o total de combustível gasto(litros): ")
  leia(combustivelGasto)


  // Processamento, Cálculo, Lógica
  consumoCombustivelQuilometragem = distanciaPercorrida / combustivelGasto

  // Saída de dados
  escreva("O valor de seu consumo de combustível por quilometragem é de: " , consumoCombustivelQuilometragem , "km/L")





  }
}
