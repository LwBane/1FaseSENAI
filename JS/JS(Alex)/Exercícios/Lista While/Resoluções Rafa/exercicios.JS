//Some os números de 1 a 100, mas pare se a soma passar de 400

// gerar a contagem de 1 a 100
// somar os números de 1 a 100
// pare se a soma passar de 400
// exiba a soma final

function somar(){

    let soma = 0
    let cont = 1 // Inicialização da variável de controle
     
    while(cont <= 100 && soma <= 400){ // Setar a condição de repetição 
        
        soma = soma + cont 
        console.log("Cont: " + cont)
        console.log("Soma: " + soma)
        console.log("====================")

        cont ++ // Modificação da contagem 

    }
    console.log(">> Soma total: " + soma)
}