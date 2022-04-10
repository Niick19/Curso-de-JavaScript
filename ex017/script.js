
function verificar(){
    var num1input = document.getElementById('numero1').value
    var num2input = document.getElementById('numero2').value
    var num1output = Number(num1input)
    var num2output = Number(num2input)
    var resultado = document.querySelector('div#resultado')
    if (num1output > num2output){
        resultado.innerHTML = `O número <strong>${num1output}</strong> é <strong>MAIOR</strong> que o <strong>${num2output}</strong>`
    }
    else if (num2output > num1output){
        resultado.innerHTML = `O número <strong>${num1output}</strong> é <strong>MENOR</strong> que o <strong>${num2output}</strong>`
    }
    else {
        resultado.innerHTML = `O número <strong>${num1output}</strong> é <strong>IGUAL</strong> ao <strong>${num2output}</strong>`

    }
}
