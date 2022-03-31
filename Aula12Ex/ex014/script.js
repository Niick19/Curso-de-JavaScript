function executar(){
    
    var mensagem = document.querySelector('div#msg')
    var foto = window.document.getElementById('imagem')
    var horaSistema = new Date()
    var horas = horaSistema.getHours()
    var minutos = horaSistema.getMinutes()
    var segundos= horaSistema.getSeconds()
    var milésimos = horaSistema.getMilliseconds()
    
     mensagem.innerHTML = (`Agora são: <strong>${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milésimos).padStart(3, '0')}</strong><br/>`)  

    if (horas >= 5 && horas <= 12){
        mensagem.innerHTML += ('<mark id="marcador">Bom dia!</mark>')
        foto.src = "images/manha.jpg"
        document.body.style.background = '#DFCAAD'
        marcador.style.background = '#DFCAAD'
    } else if (horas > 12 && horas <= 18){
        mensagem.innerHTML += ('<mark id="marcador">Boa Tarde!</mark>')
        foto.src = 'images/tarde.jpg'
        document.body.style.background = '#F8741F9f'
        marcador.style.background = '#F8741F9f'
    } else if (horas > 18 || horas < 5){
        mensagem.innerHTML += ('<mark id="marcador">Boa noite!</mark>')
        foto.src = 'images/noite.jpg'
        document.body.style.background = '#2f2f4a'
        marcador.style.background = '#2f2f4a'
        marcador.style.color = '#ffffff'
    } else{
        mensagem.innerHTML += ('<mark id="marcador">[ERRO] Hora inválida!</mark>')
    }
}

window.setInterval('executar()', 1)

