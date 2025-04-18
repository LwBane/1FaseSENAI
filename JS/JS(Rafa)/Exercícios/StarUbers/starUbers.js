function calcularTempo(){

    let distanciaCorrida
    let velocidadeLuz = 300000 //km/s
    let calcularTempo = distanciaCorrida / velocidadeLuz 

    Number(prompt("Qual a distância da corrida em km?:"))

    alert("O tempo da corrida é: " + calcularTempo + " segundos")
}