function contar(){
    var NumInicial = Number(document.getElementById('NumInicial').value)
    var NumFinal = Number(document.getElementById('NumFinal').value)
    var Regra = Number(document.getElementById('Regra').value)
    var resultado = document.querySelector('div#resultado')
    do {
        resultado.innerHTML += (`${NumInicial} <br>`)
        NumInicial += Regra
    } while (NumInicial <= NumFinal)
}