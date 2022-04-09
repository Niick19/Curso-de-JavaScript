function verificar(){
    var data = new Date()
    var AnoAtual= data.getFullYear()
    var AnoNascimento = document.getElementById('AnoNascimento')
    var resultado = document.getElementById('resultado')
    if (AnoNascimento.value.length == 0 || AnoNascimento.value > AnoAtual){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }
    else {
        var idade = AnoAtual - Number(AnoNascimento.value)
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
        else{
            img.setAttribute('src', `Images/${sexo}/idoso.jpg`)
        }
        resultado.innerHTML = `Idade: ${idade} Sexo: ${sexo}`
        resultado.appendChild(img)
    }
}