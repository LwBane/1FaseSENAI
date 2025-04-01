// 5.2 Mano Juca bateu a cabeça e está com problemas de raciocínio...
// Está analisando dois números há horas e não consegue
// descobrir qual deles é o maior. Vamos ajuda-lo!
// Crie um algoritmo que leia dois números A e B e imprima o maior deles.

programa {
  funcao inicio() {
    
  inteiro numeroA, numeroB 

  escreva("Digite o número A: ")
  leia(numeroA)

  escreva("Digite o número B: ")
  leia(numeroB)

  se(numeroA > numeroB)
  { 
    escreva("O maior número é o número A: " + numeroA)
  }

  senao
  {
    escreva("O maior número é o número B: " + numeroB)

  }
  


  }
}
