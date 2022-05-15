
function calcular(){

    var multiplicando = (document.getElementById('numero').value)
    var resultado = document.querySelector('div#resultado')
    let limiter = document.getElementById('limiter').value
    let limit = ""
    if (limiter.length == 0){
        limit = 10
    }
    else{
        limit = Number(limiter)
    }


/* 
    function showResult(){
    resultado.innerHTML=""
    for (let count=0; count < limit; count++)
    {
        let produto = multiplicando * count
    resultado.innerHTML += `${multiplicando}x${count} = ${produto} <br>`
    }
} */

    if (multiplicando.length == 0){
    alert("Verifique os dados e tente novamente!")
    }
    else {
       /*  let produto = multiplicando * count
        let item = document.createElement('option')
        item.text = `${multiplicando}x${count}=${produto}`
        item.value = `tab${count}`
        resultado.appendChild('item')
     */
    }
}