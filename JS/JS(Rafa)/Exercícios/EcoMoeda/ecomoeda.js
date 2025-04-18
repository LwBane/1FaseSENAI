
function quantidadeEcoMoedas(){

    let brinquedos, moedas

    brinquedos = Number(prompt("Quantos brinquedos você trouxe?:"))

if(brinquedos >=0 && brinquedos <=3){
    moedas = brinquedos	
    alert("Você receberá " + moedas + " moedas!")
}else if(brinquedos >3){
    moedas = 3
    alert("Você receberá " + moedas + " moedas!")
}else{
    moedas = 0
    alert("Você não receberá moedas!")
}
}