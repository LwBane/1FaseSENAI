// Simule um processo de “downloadˮ aumentando de 10% em 10%.

let downlod = 0 
let barra = "█"

while(downlod <= 100 && barra < "███████████████████" ){
    alert("Carregando download: " + barra + " " + downlod + "%")
    
    if(downlod == 100 ){
        alert("Download completo!")
    }

    downlod += 10
    barra += "█"
}



