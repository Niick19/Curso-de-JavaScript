function verificar(){
    var data = new Date()
    var AnoAtual= data.getFullYear()
    var AnoNascimento = document.getElementById('AnoNascimento')
    var resultado = document.getElementById('resultado')
    var idade = AnoAtual - Number(AnoNascimento.value)
    if (AnoNascimento.value.length == 0 || AnoNascimento.value > AnoAtual || idade > 135){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }
    else {
        
        var Selsex = document.getElementsByName('sexo')
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var sexo = ''
        
        if (Selsex[0].checked){
            sexo = 'homem'
        }
        else {
            sexo = 'mulher'
        }
        if (idade <= 12){
            img.setAttribute('src',`Images/${sexo}/criança.jpg`)
        }
        else if (idade < 21){
            img.setAttribute('src', `Images/${sexo}/jovem.jpg`)
        }
        else if (idade < 60){
            img.setAttribute('src', `Images/${sexo}/adulto.jpg`)
        }
        else if (idade < 100){
            img.setAttribute('src', `Images/${sexo}/idoso.jpg`)
        }
        else {
            img.setAttribute('src', `Images/${sexo}/aged.jpg`)
        }
        resultado.innerHTML = `<p class='center'>Olá! Detectamos um(a) ${sexo} de ${idade} anos!</p>`
        resultado.style.textAlign='center'
        resultado.appendChild(img)
        
    }
}