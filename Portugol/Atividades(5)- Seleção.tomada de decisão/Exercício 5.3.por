// 5.3 – Mano Juca enfrenta o rodízio de carros de São Paulo;
// Faça um algoritmo que leia o último número da placa do carro e mostre o
// dia em que ele não pode rodar pela cidade de São Paulo.
// Final 0 ou 1: não pode rodar na segunda-feira;
// Final 2 ou 3: não pode rodar na terça-feira;
// Final 4 ou 5: não pode rodar na quarta-feira;
// Final 6 ou 7: não pode rodar na quinta-feira;
// Final 8 ou 9: não pode rodar na sexta-feira.

programa {
  funcao inicio() {
    
  inteiro placa 

  escreva("Digite o último número da sua placa: ")
  leia(placa)

  se(placa == 0 ou placa == 1)    // tabela verdade, se eu tenho um dos dois verdadeiros, a condição é verdadeira e vai entrar ali. Só irá ser falso se todos os testes forem falsos
                                
  {
    escreva("Não pode rodar na segunda-feira")
  }

 se(placa == 2 ou placa == 3)
 {
    escreva("Não pode rodar na terça-feira")
  }

  se(placa == 4 ou placa == 5)
 {
    escreva("Não pode rodar na quarta-feira")
  } 

  se(placa == 6 ou placa == 7)
 {
    escreva("Não pode rodar na quinta-feira")
  } 

  se(placa == 8 ou placa == 9)
 {
    escreva("Não pode rodar na sexta-feira")
  } 

  }
}
