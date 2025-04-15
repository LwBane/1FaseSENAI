  //Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. 
  //Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro livroUm, livroDois, livroTreis 
  real desconto 
  inteiro valorComDesconto, valorSemDesconto 

  // Entrada de Dados 
  escreva("Escreva aqui o valor do 1° Livro: ")
  leia(livroUm)

  escreva("Escreva aqui o valor do 2° Livro: ")
  leia(livroDois)

  escreva("Escreva aqui o valor do 3° Livro: ")
  leia(livroTreis)


  // Processamento, Cálculo, Lógica
  valorSemDesconto = livroUm + livroDois + livroTreis 
  desconto = valorSemDesconto * 15/100
  valorComDesconto = valorSemDesconto - desconto 


  // Saída de dados
  escreva("O valor de seus 3 livros com desconto fica de R$ " , valorComDesconto , "\n Já sem o desconto, fica com o valor de R$" , valorSemDesconto)




  }
}
