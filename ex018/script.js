var resultado = document.getElementById('output')

function sortear(){
    var num = (Math.random() *100).toFixed(0)
    resultado.innerHTML += `<ul>
        <li>${num}</li>
    </ul>`
    resultado.style
}
function limpar(){
    resultado.innerHTML = null
}