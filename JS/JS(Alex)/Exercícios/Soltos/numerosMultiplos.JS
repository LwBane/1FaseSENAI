// Exibe números multiplos de 2 e 4 que sejam 25 

for(let contador = 0; contador <=100; contador ++){
    if(contador %2 == 0) alert ("Múltiplo de 2: " + contador)
    else if(contador %4 == 0) alert ("Múltiplo de 4: " + contador)
    else if(contador === 25) alert ("Número 25 encontrado!")
    else alert ("Não atende a regra") 
}