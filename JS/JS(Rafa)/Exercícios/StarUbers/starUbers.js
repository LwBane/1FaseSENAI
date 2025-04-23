function calcularTempo(){

    let distanciaCorrida = Number(prompt("Qual a distância da corrida?(km):"))

    let velocidadeLuz = 300000 * 3600 // velocidade da luz em km/h
    let tempoHoras = distanciaCorrida / velocidadeLuz
    let tempoSegundos = tempoHoras * 3600 // tempo em segundos

    alert(`O tempo da corrida é: ${tempoSegundos} segundos`)
}