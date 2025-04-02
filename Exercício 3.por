// Desenvolva um programa que determine se um triângulo é escaleno, isósceles ou equilátero, 
// com base nos comprimentos dos seus lados.

programa {
  funcao inicio() {
  
  real lado1, lado2, lado3 

  
  escreva("Digite o comprimento do lado 1: ")
  leia(lado1)

  escreva("Digite o comprimento do lado 2: ")
  leia(lado2)

  escreva("Digite o comprimento do lado 3: ")
  leia(lado3)



  se(lado1 == lado2 e lado2 == lado3)
  {
    escreva("O triângulo é equilátero, pois possui 3 lados iguais")
  }
    senao{
    se(lado1==lado2 ou lado1==lado3 ou lado2==lado3){
    escreva("O triângulo é isósceles, pois possui 2 lados iguais")
    }
    senao{
    escreva("O triângulo é escaleno, pois possui 3 lados diferentes")
    }  
  }

  }
}
