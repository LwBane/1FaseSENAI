// 5.5 Mano Juca é meio tansinho, coitado. Disso vocês já sabem. Mas a
// coisa tem piorado. Um professor inventou de usar o tal do sistema de
// média ponderada, onde cada prova tem um valor (peso) diferente. Nas
// ideia desse professor que não tem pena da ausência de poder de
// processamento mental do Mano Juca cada prova tem o peso:
// - Prova 1: peso 0.4;
// - Prova 2: peso 0.6;
// - Prova 3: peso 1.
// Crie um algoritmo para ler as notas no Mano Juca e calcular a média
// dele, coitado...
// Diga também se o malandro passou (a média no mobral dele é 7,0).


programa {
  funcao inicio() {
    
  real prova1, prova2, prova3, media 
  real peso1 = 0.4, peso2 = 0.6, peso3 = 1

  escreva("Digite a nota da prova 1: ")
  leia(prova1)

  escreva("Digite a nota da prova 2: ")
  leia(prova2)

  escreva("Digite a nota da prova 3: ")
  leia(prova3)

  media = (prova1*peso1 + prova2*peso2 + prova3*peso3) / (peso1+peso2+peso3)

  se(media >= 7)
  {
    escreva("Parabéns, você foi aprovado! \nSua média final foi de: " + media)
  }
  senao
  {
    escreva("infelizmente você não foi aprovado :(")
  }

  }
}
