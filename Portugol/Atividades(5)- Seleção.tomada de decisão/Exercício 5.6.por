// 5.6 Mano Juca tá se aventurando em um novo gamezinho no celular dele.
// Ele tá se divertindo, mas não tem a menor ideia se tá
// mandando bem ou não.
// Crie um algoritmo que leia a pontuação que ele fez e diga
// como ele se saiu, sendo:
// - “Deu ruim”, se pontuação <= 10
// - “Tá... (Acrescente aqui uma frase motivacional)”, se
// pontuação > 10 e pontuação <= 100
// - “Supimpa!”, se pontuação > 100 e pontuação <= 200
// - MITOU!, se pontuação > 200


programa {
  funcao inicio() {
  
  inteiro pontuacao

  escreva("Digite aqui sua pontuação: ")
  leia(pontuacao)


  se(pontuacao <=10 )
  {
    escreva("Deu ruim! Tente de novo")
  }

  se(pontuacao > 10 e pontuacao <= 100)
  {
    escreva("Tá... A persistência leva ao sucesso, você vai conseguir na próxima!")
  }

  se(pontuacao > 100 e pontuacao <= 200)
  {
    escreva("Supimpa")
  }

   se(pontuacao > 200)
  {
    escreva("Você MITOU!")
  }





  }
}
