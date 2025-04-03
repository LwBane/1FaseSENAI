// Desenvolva um programa que indique se um número é divisível por 3 e por 5 ao mesmo tempo.

programa {
  funcao inicio() {
  
  inteiro numero 

  escreva("Digite um número: ")
  leia(numero)

  se(numero % 3 == 0 e numero % 5 == 0){
    escreva("O número é divisível por 3 e por 5 ao mesmo tempo")
  }senao{
    escreva("O número não é divisível por 3 e por 5 ao mesmo tempo")
  }
  }
}
