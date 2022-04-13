
function verificar(){
    var num1input = document.getElementById('numero1').value
    var num2input = document.getElementById('numero2').value
    var num1output = Number(num1input)
    var num2output = Number(num2input)
    var resultado = document.querySelector('div#resultado')
    var diferença = ""
    if (num1output > num2output){
        diferença = num1output - num2output
        resultado.innerHTML = `Calculamos que <strong>A</strong> é maior do que <strong>B</strong>.`
        resultado.innerHTML += `<br> <br> <p>A <strong>diferença</strong> entre <strong>A</strong> e <strong>B</strong> é de <strong>${diferença}</strong></p>`
    }
    else if (num2output > num1output){
        diferença = num2output - num1output
        resultado.innerHTML = `Calculamos que <strong>B</strong> é maior do que <strong>A</strong>.`
        resultado.innerHTML += `<br> <br> <p>A <strong>diferença</strong> entre <strong>B</strong> e <strong>A</strong> é de <strong>${diferença}</strong></p>`
    }
    else {
        resultado.innerHTML = `Calculamos que <strong>A</strong> e <strong>B</strong> são iguais!`

    }
}
