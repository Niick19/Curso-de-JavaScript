

var resto = []
let primos = []
var inicial
var fatorando = 22
var fatorado = fatorando
inicial = 2
function numerosprimos(n){
    
    if (n <= 0 || n == NaN || n == undefined){
        return "Número inválido!"
    }
    else if(n == 2){
        primos.push(n)
        inicial++
        return "É primo!"
    }
    else {
        resto = []
        for(var divisor = 2; divisor < n; divisor++){
        resto.push(n % divisor)
    }
    if(resto.indexOf(0) != -1){
        inicial++
        resto = []
        return "NÃO É primo!"
    } else{
        primos.push(n)
        inicial++
        return "É primo!"
    }
}  

}
while (inicial <= fatorando){
    console.log(inicial, numerosprimos(inicial))
}

function decomposicao(n){
    var index = 0
    numerosprimos(n)
    console.log(primos)
    while (primos[index] < fatorando) {
     if (n % primos[index] == 0){
        fatorado = (n / primos[index])
        console.log("index ", index, " fatorado ", fatorado)
            if(index == primos.length - 1 && fatorado != 1){
                index = 0
            } else{
                index ++
            }
        }
        else{
            console.log("index ", index, " fatorado ", fatorado)
            if(index == primos.length - 1 && fatorado != 1){
                index = 0
            } else{
                index ++
            }
        }
    }
}


decomposicao(22)
