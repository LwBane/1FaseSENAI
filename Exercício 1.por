// Escreva um programa que determine se um número é positivo, negativo ou zero

programa {
  funcao inicio() {
  
  inteiro numero 

  escreva("Digite um número: ")
  leia(numero)

  se(numero > 0)
  {
    escreva("O número é positivo")
  }
  se(numero < 0)
  {
    escreva("O número é negativo")
  }
  se(numero == 0)
  {
    escreva("O número é igual a 0")
  }

  }
}
