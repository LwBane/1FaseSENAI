function calcularTempo(){

    let distanciaCorrida = Number(prompt("Qual a distância da corrida?(km):"))

    let velocidadeLuz = 300000 * 3600 // velocidade da luz em km/h
    let tempoHoras = distanciaCorrida / velocidadeLuz
    let tempoSegundos = tempoHoras * 3600 // tempo em segundos


    if (tempoSegundos >= 31536000) {
        let tempoAnos = tempoSegundos / 31536000;
        alert(`Em anos: ${tempoAnos} anos\nEm ${tempoSegundos} segundos`);
    }
    else if (tempoSegundos >= 2592000) {
        let tempoMeses = tempoSegundos / 2592000;
        alert(`Em meses: ${tempoMeses} meses\nEm ${tempoSegundos} segundos`);
    }
    else if (tempoSegundos >= 86400) {
        let tempoDias = tempoSegundos / 86400;
        alert(`Em dias: ${tempoDias} dias\nEm ${tempoSegundos} segundos`);
    }
    else if (tempoSegundos >= 3600) {
        let tempoHoras = tempoSegundos / 3600;
        alert(`Em horas: ${tempoHoras} horas\nEm ${tempoSegundos} segundos`);
    }
    else if (tempoSegundos >= 60) {
        let tempoMinutos = tempoSegundos / 60;
        alert(`Em minutos: ${tempoMinutos} minutos\nEm ${tempoSegundos} segundos`);
    }
    else {
        alert(`O tempo da corrida é: ${tempoSegundos} segundos`);
    }
}