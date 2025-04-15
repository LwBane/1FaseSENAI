// 3.8 Meu amigo Mano Juca está tentando complementar a renda e resolveu fazer uns corre de Uber. 
// Ele resolveu que vai fazer 5 corre por dia. Crie um programa que leia o valor dos cinco corre e mostre a ele quanto ganhou no dia.  

// 3.9 Ops, o Juca lembrou agora que a Uber cobra dele 25% por corrida. Altere o programa para efetuar esse desconto para 
// que ele não acabe contando com o ovo ainda na parte interna da galinha. 


programa {
  funcao inicio() {
    

  real corrida1, corrida2, corrida3, corrida4, corrida5, totalCorridas
  real cobrancaUber = 0.75 // como há um desconto de 25%, juca fica com 75% do valor da corrida


  escreva("Digite o valor recebido da primeira corrida: ")
  leia(corrida1)

  escreva("Digite o valor recebido da segunda corrida: ")
  leia(corrida2)

  escreva("Digite o valor recebido da terceira corrida: ")
  leia(corrida3)

  escreva("Digite o valor recebido da quarta corrida: ")
  leia(corrida4)

  escreva("Digite o valor recebido da quinta corrida: ")
  leia(corrida5)

  corrida1 = corrida1 * cobrancaUber
  corrida2 = corrida2 * cobrancaUber
  corrida3 = corrida3 * cobrancaUber
  corrida4 = corrida4 * cobrancaUber
  corrida5 = corrida5 * cobrancaUber
  totalCorridas = corrida1 + corrida2 + corrida3 + corrida4 + corrida5 

  escreva("O total recebido no dia, já com o desconto do Uber é de R$" + totalCorridas)


  }
}
