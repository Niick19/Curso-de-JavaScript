//Calculadora de números primos


var resto = []

function numerosprimos(n){
    if (n <= 0 || n == NaN || n == undefined){
        return "Número inválido!"
    }
    else if(n == 2){
        return "É primo!"
    }
    else {
        for(var divisor = 2; divisor < n; divisor++){
        resto.push(n % divisor)
    }
    if(resto.indexOf(0) != -1){
        return "NÃO É primo!"
    } else{
        return "É primo!"
    }
}
        
}

console.log(numerosprimos(997))