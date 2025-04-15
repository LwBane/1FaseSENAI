  // Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) 
  // e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, 
  // em meses, em dias e em semanas.

programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro anoDoNascimento 
  inteiro anoAtual 
  inteiro idadeEmAnos 
  inteiro idadeEmMeses
  inteiro idadeEmDias 
  inteiro idadeEmSemanas 

  // Entrada de Dados 
  escreva("Digite o ano em que você nasceu: ")
  leia(anoDoNascimento)
  escreva("Digite o ano atual: ")
  leia(anoAtual)

// Processamento, Cálculo, Lógica 
  idadeEmAnos = anoAtual - anoDoNascimento
  idadeEmMeses = idadeEmAnos * 12
  idadeEmDias = idadeEmAnos * 365 
  idadeEmSemanas = idadeEmDias / 7 


  // Saída de dados

  escreva("\nSua idade é:\n")
  escreva(idadeEmAnos, " anos\n")
  escreva(idadeEmMeses, " meses\n")
  escreva(idadeEmSemanas, " semanas\n")
  escreva(idadeEmDias, " dias\n")
 


  }
}
