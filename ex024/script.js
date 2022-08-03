let num = document.getElementById('numinput')
let table = document.getElementById('tabvalues')
let values = []
let res = document.getElementById('res')

function IsNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function InTable(n, l){
    if (l.indexOf(n) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (IsNumber(num.value) && !InTable(num.value, values)){
        table.removeChild
        values.push(num.value)
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        table.appendChild(item)
        res.innerHTML = ''
    }
    else{
        alert('[Erro] Número inválido ou já na tabela!')
    }
    num.value = ''
    num.focus()
}

function analisar(){
    if(values.length < 1){
        alert('Insira os dados para finalizar!')
    } else{
        let plus = 0
        let media = 0
        let biggest = values[0]
        let smallest = values[0]
        for (let key in values){
            plus += Number(values[key])
            if (Number(values[key]) > biggest){
                biggest = values[key]
            }
            if (Number(values[key]) < smallest){
                smallest = values[key]
            }
        }
        media = plus / values.length     
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${values.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${biggest}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${smallest}</p>`
        res.innerHTML += `<p>A soma de todos os valores foi: ${plus}</p>`
        res.innerHTML += `<p>A média de todos os valores é de: ${media}</p>`
}
}