// 5.13 Crie um programa para ler 3 valores inteiros e informar qual é o maior deles. Pode considerar que nenhum energúmeno vai digitar valores iguais. 


programa {
  funcao inicio() {
    
  inteiro v1, v2, v3 

  escreva("Digite o 1° valor: ")
  leia(v1)

  escreva("Digite o 2° valor: ")
  leia(v2)

  escreva("Digite o 3° valor: ")
  leia(v3)

  
  se(v1> v2 e v1 > v3){
    escreva("O valor " + v1 +  " é o maior")
  }senao{
    se(v2>v1 e v2>v3){
      escreva("O valor " + v2 + " é o maior")
    }senao{
      se(v3>v1 e v3>v2){
        escreva("O valor " + v3 + " é o maior")
      }
    }
  }

  }
}
