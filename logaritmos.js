//Calculadora de logaritmos

let primos = []
let numerommc = 100
var multiploscomuns = []
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
     /* console.log(primos) //Listar todos os primos */
}

listarprimos()

function isDivisible (){
    for (let pos in primos){
        /* console.log(pos, primos[pos]) */
        if (numerommc % primos[pos] == 0){

            multiploscomuns.push(primos[pos])
            console.log(`O número ${numerommc} é divisível por ${primos[pos]}`)
            console.log(`${numerommc} / ${primos[pos]} = ${numerommc / primos[pos]}`)
            
        }
    
    }
    console.log(multiploscomuns)
}

isDivisible()
