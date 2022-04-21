function calcular(){
    var multiplicando = Number(document.getElementById('numero').value)
    var multiplicador = [1,2,3,4,5,6,7,8,9,10]
    var resultado = document.querySelector('div#resultado')
    var selectArray = 0
    var produto = multiplicando * multiplicador[selectArray]
    do {
        resultado.innerHTML += produto + "<br>"
        selectArray++
    } while (selectArray <= 10)

}