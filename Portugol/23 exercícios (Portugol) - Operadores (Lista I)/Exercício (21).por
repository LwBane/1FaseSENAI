// Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, 
// exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. 
// Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. 
//Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre 
//esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.



programa {
  funcao inicio() {
    
  // Declaração de variáveis
 inteiro solteiroTerritorio = 320 , casalTerritorio = 400
 inteiro numeroFemeas = 9 , numeroMachos = 5
 inteiro numeroCasais 
 inteiro numeroFemeasSolteiras , numeroMachosSolteiros , animaisSolteiros
 inteiro areaSolteiros , areaCasais
 inteiro somaGeralArea

  // Entrada de Dados 
  escreva("Digite aqui quantos casais existem: ")
  leia(numeroCasais)

  // Processamento, Cálculo, Lógica
  numeroFemeasSolteiras = numeroFemeas - numeroCasais
  numeroMachosSolteiros = numeroMachos - numeroCasais 
  areaCasais = numeroCasais * casalTerritorio
  areaSolteiros = (numeroMachosSolteiros + numeroFemeasSolteiras) * solteiroTerritorio
  somaGeralArea = areaCasais + areaSolteiros

  // Saída de dados
  escreva("A soma geral de área dominada, incluindo todos os indivíduos é de: " , somaGeralArea , "km²")






  }
}
