function verificar() {
    var input = document.querySelector('input#numinput').value
    var numSorteado = (Math.random() * 100).toFixed(0)
    var resultado = document.querySelector('div#resultado')
    if (input == numSorteado){
        resultado.innerHTML= `Acertou!! O número sorteado foi: ${numSorteado}`
    }
    else {
        resultado.innerHTML= `ERROU!! O número sorteado foi: ${numSorteado}`
    }
}