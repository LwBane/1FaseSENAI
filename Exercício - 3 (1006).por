//Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
//A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
//Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.



programa {
  funcao inicio() {
    
 // Declaração de variáveis
  real nota1, nota2, nota3
  real peso1 = 2, peso2 = 3, peso3 = 5
  real somaDosPesos = peso1 + peso2 + peso3 
  real mediaAluno 


  // Entrada de Dados 
  escreva("Digite a primeira nota: ")
  leia(nota1)

  escreva("Digite a segunda nota: ")
  leia(nota2)

  escreva("Digite a terceira nota: ")
  leia(nota3)

  // Processamento, Cálculo, Lógica
  mediaAluno = (nota1*peso1 + nota2*peso2 + nota3*peso3) / somaDosPesos

  // Saída de dados
  escreva("A média do aluno é de: " +  mediaAluno)






  }
}
