// As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. 
//A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. Programar um sistema que calcule o
// total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.


programa {
  funcao inicio() {
    

  // Declaração de variáveis
  real vidaBaleias = 200 
  real reproducao = vidaBaleias/4
  real totalFilhotes , mediaFilhotes 


  // Processamento, Cálculo, Lógica
  totalFilhotes = reproducao 
  mediaFilhotes = totalFilhotes / (vidaBaleias/10) // média de filhotes por década (existem 20 décadas em 200 anos)

  // Saída de dados
  escreva("O total de filhotes ao longo da vida das baleias da Groenlândia é de: ", totalFilhotes , "\n")
  escreva("A média de filhotes dessa mesma baleia por década é de: ", mediaFilhotes)








  }
}
