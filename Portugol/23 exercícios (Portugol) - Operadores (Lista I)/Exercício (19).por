//Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás,
// sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito 
//somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio 
//e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.




programa {
  funcao inicio() {
    

  // Declaração de variáveis
  inteiro pessoasPasseio 
  inteiro taxaPessoa = 20
  inteiro totalTaxa
  inteiro tempoPasseio 
  inteiro consumoGas = 15
  real metroGas = 10 
  inteiro totalGas 
  real totalPasseio 

  // Entrada de Dados 
  escreva("Quantas pessoas irão no passeio(maxímo 4 pessoas)?: ")
  leia(pessoasPasseio)

  escreva("De quanto tempo será o passeio?: ")
  leia(tempoPasseio)

  // Processamento, Cálculo, Lógica
  totalTaxa = taxaPessoa * pessoasPasseio
  totalGas = ((tempoPasseio / 5) * metroGas) * consumoGas
  totalPasseio = totalGas + totalTaxa

  // Saída de dados
  escreva("O total cobrado pelo passeio será de R$:" , totalPasseio)



  }
}
