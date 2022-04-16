function verificar() {
    var input = document.querySelector('input#numinput').value
    var numSorteado = (Math.random() * 100).toFixed(0)
    var resultado = document.querySelector('div#resultado')
    if (input == numSorteado){
        alert(` DEU CERTO!!!  o input foi ${input} e o numero sorteado foi: ${numSorteado}`)
    }
    else {
        alert(` o input foi ${input} e o numero sorteado foi: ${numSorteado}`)
    }
}