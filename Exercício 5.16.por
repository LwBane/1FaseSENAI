// 5.16 Cria aí um programa para ler 3 números e escrevê-los em ordem crescente! 

programa {
  funcao inicio() {
  

  inteiro v1, v2, v3 
  inteiro menor, meio, maior

  escreva("Digite o 1° valor: ")
  leia(v1)

  escreva("Digite o 2° valor: ")
  leia(v2)

  escreva("Digite o 3° valor: ")
  leia(v3)

  se(v1<v2 e v1<v3){
    menor = v1
    se(v2<v3){
      meio = v2
      maior=v3
    } senao{
      meio = v3
      maior = v2
    }
  }senao{
     se(v2<v1 e v2<v3){
      menor = v2
      se(v1<v3){
        meio=v1
        maior=v3
      } senao {
        meio = v3
        maior = v1
      }
  }
  } 
   se(v3<v1 e v3<v2){
    menor = v3
     se(v1<v2){
        meio=v1
        maior=v2
      }
      senao {
        meio=v2
        maior=v1
      }

  }
  
  escreva("A ordem crescente é de " + menor + "," + meio + "," + maior)
  }
}
