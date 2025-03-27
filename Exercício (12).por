  //Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. 
  //Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos
  //(a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação 
  //ao total de eleitores. 


programa {
  funcao inicio() {
    
  // Declaração de variáveis
  inteiro eleitores 
  inteiro candidatoX, candidatoY
  inteiro votosBrancos, votosNulos 
  inteiro totalEleitores

  // Entrada de Dados 
  escreva("Digite aqui o número de eleitores: ")
  leia(eleitores)

  escreva("Digite aqui o número de votos do candidato X: ")
  leia(candidatoX)

  escreva("Digite aqui o número de votos do candidato Y: ")
  leia(candidatoY)

  escreva("Digite aqui o número de votos brancos: ")
  leia(votosBrancos)

  escreva("Digite aqui o número de votos nulos: ")
  leia(votosNulos)

  // Processamento, Cálculo, Lógica
  totalEleitores = candidatoX + candidatoY + votosBrancos + votosNulos
  candidatoX = (candidatoX/totalEleitores) *100                // (candidatoX * 100) / totalEleitores 
  candidatoY = (candidatoY/totalEleitores) *100
  votosBrancos = (votosBrancos/totalEleitores) *100
  votosNulos = (votosNulos/totalEleitores) *100 

  // Saída de dados
  escreva("O número de eleitores é de " , eleitores , ", então, o percentual de cada voto é de:" , "\n" , 
  "Candidato X:" , candidatoX , "\n" , "Candidato Y:" , candidatoY , "\n" , "De votos brancos:" , votosBrancos , "\n" , "De votos nulos:" , votosNulos)


  }
}
