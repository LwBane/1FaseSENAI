  //Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel 
  //rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada 
  //material que deseja entregar na fábrica e mostrar o total que receberá em reais.


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro kgPlastico, kgPapel, kgMetal
  real valorPlastico, valorPapel, valorMetal 
  real valorTotal

  // Entrada de Dados 
  escreva("Digite quantos kg de plástico você deseja entregar: ")
  leia(kgPlastico)

  escreva("Digite quantos kg de papel você deseja entregar: ")
  leia(kgPapel)

  escreva("Digite quantos kg de metal você deseja entregar: ")
  leia(kgMetal)


  // Processamento, Cálculo, Lógica
  valorPlastico = (kgPlastico/10) * 2
  valorPapel = (kgPapel/30) * 3
  valorMetal = (kgMetal/50) * 5 
  valorTotal = valorPlastico + valorPapel + valorMetal


  // Saída de dados
  escreva("Entregando " , kgPlastico , "kg de plástico, " , kgPapel , "kg de papel, e " , kgMetal , "kg de metal, você receberá R$" , valorTotal)

  }
}
