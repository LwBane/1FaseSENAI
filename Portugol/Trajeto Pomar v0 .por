 // Projeto - Trajeto Pomar

programa {
  funcao inicio() {
    
  // Declaração de Variáveis 
    
  cadeia nome, resposta , sim , desejo 
  inteiro macaQ, laranjaQ, bergamotaQ, bananaQ, peraQ
  inteiro maca, laranja, bergamota, banana, pera, totalCompra
  inteiro cpf 

  // Entrada de dados 

  escreva("Deseja colocar o seu cpf na nota?: ")
  leia(resposta)

  se(resposta == "sim" ou resposta == "desejo")
  {
    escreva("Digite ele: ")
    leia(cpf) 
  }

  senao
  {
    escreva("Ok, sem problemas!")
  }

  escreva("\n Quantas maçãs foram colhidas?: ")
  leia(macaQ)

  escreva("Quantas laranjas foram colhidas?: ")
  leia(laranjaQ)

  escreva("Quantas bergamotas foram colhidas?: ")
  leia(bergamotaQ)

  escreva("Quantas bananas foram colhidas? ")
  leia(bananaQ)

  escreva("Quantas peras foram colhidas?: ")
  leia(peraQ)

  // Cálculos 

  maca = macaQ * 1.50 
  laranja = laranjaQ * 2.00 
  bergamota = bergamotaQ * 1.00 
  banana = bananaQ * 1.20 
  pera = peraQ * 0.50 
  totalCompra = maca + laranja + bergamota + banana + pera 




  // Saída de dados 

  escreva("\n O valor total da compra ficou no valor de R$" + totalCompra + 
  
  "\n \nRecibo: \n" 
  + macaQ + " maçãs (Unit: R$1,50) ------- Total:R$" + maca + "\n" 
  + laranjaQ + " laranjas (Unit: R$2,00) ------- Total:R$" + laranja + "\n" 
  + bergamotaQ + " bergamotas (Unit: R$1,00) ------- Total:R$" + bergamota + "\n" 
  + bananaQ + " bananas (Unit: R$1,20) ------- Total:R$" + banana + "\n" 
  + peraQ + " peras (Unit: R$0,50) ------- Total:R$" + pera) 

  se(resposta == "sim" ou resposta == "desejo")
  {
    escreva("\nCompra realizada no cpf: " + cpf)
  }
  escreva( "\n \n ||||||| ||||||||| ||||||" + "\n ||||||| ||||||||| ||||||")
  

  escreva( "\n \n Muito obrigado por comprar no >>Trajeto Pomar<< Volte sempre!!")

  }
}
