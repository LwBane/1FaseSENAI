//Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. 
//A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 
//(A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.


programa {
  funcao inicio() {
    

  // Declaração de variáveis
  real nota1, nota2
  real peso1 = 3.5, peso2 = 7.5 
  real somaDosPesos = peso1 + peso2  
  real mediaAluno 


  // Entrada de Dados 
  escreva("Digite a primeira nota: ")
  leia(nota1)

  escreva("Digite a segunda nota: ")
  leia(nota2)

  // Processamento, Cálculo, Lógica
  mediaAluno = (nota1*peso1 + nota2*peso2) / somaDosPesos

  // Saída de dados
  escreva("A média do aluno é de: " +  mediaAluno)





  }
}
