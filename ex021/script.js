function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let limiter = document.getElementById('limiter')
    let limit = ""
        if (limiter.value.length == 0 || Number(limiter.value) == 0) {
            limit = 10
        }
        else if (Number(limiter.value) < 0) {
            alert("[Aviso] Digite somente limites maiores que 0")
            limit = Number(limiter.value) * -1
        }
        else {
            limit = Number(limiter.value)
        }
    if (num.value.length == 0){
        alert("Verifique os dados e tente novamente!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.size = limit
        tab.innerHTML = ""
        while (c <= limit ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}