
function quantidadeEcoMoedas(){

    let brinquedos, moedas

    brinquedos = Number(prompt("Quantos brinquedos você trouxe?:"))

if(brinquedos >=0 && brinquedos <=3){
    moedas = brinquedos	

}else if(brinquedos > 3){
    moedas = 3

}else{
    moedas = 0
}
alert("Você receberá " + moedas + " moedas!")
}