var resultado = document.getElementById('output')

function sortear(){
    var num = (Math.random() *100).toFixed(0)
    resultado.innerHTML += `<li>${num}</li>`
}
function limpar(){
    resultado.innerHTML = null
}