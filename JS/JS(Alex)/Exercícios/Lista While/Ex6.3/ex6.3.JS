// Simule uma barra de carregamento (ex: “█ˮ aumentando)

let barra = "█"

while(barra < "██████████"){
    alert("Carregando: " + barra)
    barra += "█"
}
alert("Carregamento completo!")