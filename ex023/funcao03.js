/* Também da pra declarar variáveis com valores de funções */

let res = function soma(n1 = 0 , n2 = 0){
    return n1 + n2
}

console.log(res(3,9))