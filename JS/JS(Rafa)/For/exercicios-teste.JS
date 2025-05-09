//Mostre apenas os números pares de 1 a 20
function pares(){
    for(let i= 2; i <= 20; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

//Conte de 0 a 50 pulando de 5 em 5
function contar(){
    for(let i=0; i <=50; i+=5){
        console.log(i)
    }
}

// Simule uma barra de carregamento (ex: “█ˮ aumentando)

function barraCarregamento(){
for(let i="█"; i <="██████████"; i+="█"){
    alert(i)
}
}