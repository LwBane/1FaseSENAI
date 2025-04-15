// 3. Faça um programa que receba dois números e execute as operações listadas a seguir de acordo com a escolha do usuário: 
// op1 = "Média entre os números digitados"
// op2 = "Diferença entre os números digitados"
// op3 = "Produtos entre os números digitados"
// op4 = "Divisão do primeiro número pelo segundo"


programa {
  funcao inicio(){
    
  //escolha do usuário 
  
  inteiro opEscolhida   
  real n1, n2
  cadeia op1, op2, op3, op4

  // operações 

  op1 = "Média entre os números digitados"
  op2 = "Diferença entre os números digitados"
  op3 = "Produtos entre os números digitados"
  op4 = "Divisão do primeiro número pelo segundo"
  
  escreva("Digite um valor: ")
  leia(n1)

  escreva("Digite outro valor: ")
  leia(n2)

  escreva("\n||1 = Média entre os números digitados||" + 
  "\n||2 = Diferença entre os números digitados||" + 
  "\n||3 = Produtos entre os números digitados||" + 
  "\n||4 = Divisão do primeiro número pelo segundo||\n" + 
  "\nDigite o número da operação que deseja realizar: ")
  leia(opEscolhida)

  se(opEscolhida > 4 ou opEscolhida < 1){
    escreva("Essa opção de operação não existe")
  }

  //operação 1: 

  se(opEscolhida == 1){
  inteiro media 
  media = (n1+n2) / 2

    escreva("||A operação escolhida foi: " + op1 + "||")
    escreva("\n o resultado da operação 1 é de: " + media)
  }

  //operação 2:

  se(opEscolhida == 2){
  inteiro diferenca 
  diferenca = n1 - n2

    escreva("||A operação escolhida foi: " + op2 + "||")
    escreva("\n o resultado da operação 2 é de: " + diferenca)
  }

  //operação 3:

  se(opEscolhida == 3){
  inteiro produto 
  produto = n1 * n2

    escreva("||A operação escolhida foi: " + op3 + "||")
    escreva("\n o resultado da operação 3 é de: " + produto)
  }

  //operação 4:

  se(opEscolhida == 4){
  inteiro divisao 
  divisao = n1 / n2

    escreva("||A operação escolhida foi: " + op4 + "||")
    escreva("\n o resultado da operação 4 é de: " + divisao)
  }


  }
}
