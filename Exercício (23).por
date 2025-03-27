// Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. 
// A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. 
// O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro atividadeIndividual , seminarioEquipe , projetoFinal 
  real pesoAtividadeIndividual, pesoSeminario , pesoProjetoFinal 
  real mediaFinal 

  // Entrada de Dados 
  escreva("Digite a nota da Atividade Individual: ")
  leia(atividadeIndividual)
  escreva("Digite o peso da Atividade Individual: ")
  leia(pesoAtividadeIndividual)

  escreva("Digite a nota do Seminário em Equipe: ")
  leia(seminarioEquipe)
  escreva("Digite o peso do Seminário em Equipe: ")
  leia(pesoSeminario)

  escreva("Digite a nota do Projeto Final: ")
  leia(projetoFinal)
  escreva("Digite o peso do Projeto Final: ")
  leia(pesoProjetoFinal)

  // Processamento, Cálculo, Lógica
  mediaFinal =(atividadeIndividual * pesoAtividadeIndividual + seminarioEquipe * pesoSeminario + projetoFinal * pesoProjetoFinal) / (pesoAtividadeIndividual + pesoSeminario + pesoProjetoFinal)


  // Saída de dados
  escreva("Sua média é de: " , mediaFinal)








  }
}
