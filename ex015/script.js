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
            sexo = 'Homem'
        }
        else {
            sexo = 'Mulher'
        }
        resultado.innerHTML = `Idade: ${idade} Sexo: ${sexo}`
    }
}