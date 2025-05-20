function mediaPonderada(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)

    let p1 = Number(document.getElementById("p1").value)
    let p2 = Number(document.getElementById("p2").value)
    let p3 = Number(document.getElementById("p3").value)
    let p4 = Number(document.getElementById("p4").value)

    let media = (n1*p1 + n2*p2 + n3*p3 + n4*p4) / (p1 + p2 + p3 + p4);

    let tagresultado = document.getElementById("resultado");

    tagresultado.innerText = "A sua média é de: " + media 
}
