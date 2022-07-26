let num = [3,1,6,4,9]
num.push(2) /* Adiciona um valor no final do array
Também é possível fazer isso simplesmente com: num[4]=2
*/
num.sort() /* ordena o array em ordem crescente */

for(key = 0; key < num.length /*quantidade de elementos no array */; key++){
    console.log(`A posição ${key} tem o valor ${num[key]}`)
}

/* num.length não vai () porque não é um método, e sim, um atributo */

console.log('')
console.log('')
console.log('')


let letra = ['h', 'f','a','d','s','g','e','w','c']
letra.sort() /* Também funciona para ordenar strings em ordem alfabética */

for(indice=0; indice<letra.length; indice++){
    console.log(letra[indice])
}


console.log('')
console.log('')
console.log('')
console.log('')




for(let pos in num ){
    console.log(num[pos])  /* Forma simplificada do for para objetos */
}





console.log('')
console.log('')
console.log('')