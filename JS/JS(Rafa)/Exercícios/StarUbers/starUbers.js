function calcularTempo(){

    let distanciaCorrida, calculoTempo
    let velocidadeLuz = 300000 //km/s
    
    calculoTempo = distanciaCorrida / velocidadeLuz 

    distanciaCorrida = Number(prompt("Qual a distância da corrida?(km):"))

    alert("O tempo da corrida é: " + calculoTempo + " segundos")
}