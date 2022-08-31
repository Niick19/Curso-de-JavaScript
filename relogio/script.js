var res = document.querySelector('div#res')

function getTimeNow(){

    var agora = new Date()
    var semana = agora.getDay()
    var dia = agora.getDate()
    var diaSem = ""
    var month = agora.getMonth()
    var mes = ""
    var ano = agora.getFullYear()

    switch (semana){
        case 0:
           diaSem = (`Domingo`)
            break
        case 1:
            diaSem = (`Segunda-Feira`)
            break
        case 2:
            diaSem = (`Terça-Feira`)
            break
        case 3:
            diaSem = (`Quarta-Feira`)
            break
        case 4:
            diaSem = ('Quinta-Feira')
            break
        case 5:
            diaSem = (`Sexta-Feira`)
            break
        case 6:
            diaSem = (`Sábado`)
            break
        default:
            diaSem = (`[ERRO] Data inválida!`)
            break
        }
        
    switch (month){
        case 0:
           mes = (`Janeiro`)
            break
        case 1:
            mes = (`Fevereiro`)
            break
        case 2:
            mes = (`Março`)
            break
        case 3:
            mes = (`Abril`)
            break
        case 4:
            mes = ('Maio')
            break
        case 5:
            mes = (`Junho`)
            break
        case 6:
            mes = (`Julho`)
            break
        case 7:
            mes = (`Agosto`)
            break
        case 8:
            mes = (`Setembro`)
            break
        case 9:
            mes = (`Outubro`)
            break
        case 10:
            mes = (`Novembro`)
            break
        case 11:
            mes = (`Dezembro`)
            break
        default:
            mes = (`[ERRO] Mês inválido!`)
            break
    }






    var agora = new Date()
    var hours = agora.getHours()
    var minutes = agora.getMinutes()
    var seconds = agora.getSeconds()

    res.innerHTML = (`Hoje é ${diaSem}, ${hours} de ${mes} de ${ano}.<br/>`)
    res.innerHTML += (`Agora são: <strong>${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}</strong><br/>`)

    if (hours >= 5 && hours <= 12){
        res.innerHTML += ('Bom dia!')
    } else if (hours > 12 && hours <= 18){
        res.innerHTML += ('Boa Tarde!')
    } else if (hours > 18 || hours < 5){
        res.innerHTML += ('Boa noite!')
    } else{
        res.innerHTML += ('[ERRO] Hora inválida!]')
    }
    window.setInterval('getTimeNow()', 1000)
}