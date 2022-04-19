
var resultado = document.querySelector('div#resultado')

function limpar(){
    resultado.innerHTML = null
}

function contar(){
    var NumInicial = Number(document.getElementById('NumInicial').value)
    var NumFinal = Number(document.getElementById('NumFinal').value)
    var Regra = Number(document.getElementById('Regra').value)
    limpar()

    if (NumInicial > NumFinal ){
        alert('[ERRO] O número inicial não pode ser maior que o número final!')
    } 
    else{
    do {
        resultado.innerHTML += (`${NumInicial} <br>`)
        NumInicial += Regra
    } while (NumInicial <= NumFinal)
}
}
