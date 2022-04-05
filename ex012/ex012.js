var agora = new Date()
var hours = agora.getHours()
var minutes = agora.getMinutes()
var seconds = agora.getSeconds()

console.log (`Agora são ${hours} horas, ${minutes} minutos e ${seconds} segundos.`)

if (hours >= 5 && hours <= 12){
    console.log ('Bom dia!')
} else if (hours > 12 && hours <= 18){
    console.log ('Boa Tarde!')
} else if (hours > 18 || hours < 5){
    console.log ('Boa noite!')
} else{
    console.log ('[ERRO] Hora inválida!]')
}
/*
var agora = new Date()
var hours = agora.getHours()
var minutes = agora.getMinutes()
var seconds = agora.getSeconds()

console.log (`Agora são ${hours} horas, ${minutes} minutos e ${seconds} segundos.`)*/