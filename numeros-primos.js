//Calculadora de números primos


var resto = []
let primos = []
var inicial
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

while (inicial <= 300){
    console.log(inicial, numerosprimos(inicial))
}
console.log(primos)
