//Calculadora de logaritmos

let primos = []
let numerommc = 100
function numerosprimos(n){

    if (n <= 0 || n === NaN || n === undefined){
        return "Número inválido!"
    }
    else if(n === 2){
        /* console.log("É primo!") */
        return true
        
    }
    else {
        for(let divisor = 2; divisor < n; divisor++){
    
            if(n % divisor == 0 ){
            /* console.log("Não é primo!") */
            return false
            
            } else{
            /* console.log("É primo!") */
                return true
            }
}
}   
}

function listarprimos() {
    for (let c = 2; c < numerommc; c++){
     if (numerosprimos(c) == true){
        primos.push(c)
    } 
}
    console.log(primos)
}
listarprimos()





/* function logaritmos(a=10, b, x){
} */