// Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a). 
//Faça um programa no qual seja digitado a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.


programa {
  funcao inicio() {
    

  // Declaração de Variáveis 
  inteiro bombonsPorAluno = 3 
  inteiro quantidadeAlunos 
  inteiro totalDeBombons 
  inteiro bombonsProfessores = 1 

  // Entrada de Dados 
  escreva("Qual a quantidade de alunos na turma? ") 
  leia(quantidadeAlunos)

  // Processamento, Cálculo, Lógica 
  totalDeBombons = (quantidadeAlunos * 2) + bombonsProfessores

  // Saída de Dados 
  escreva("O total de bombons que devem ser comprados para uma turma com " , quantidadeAlunos ," alunos" , " deve ser de " , totalDeBombons , " bombons")




  }
}
