/* console.log(nome)
var nome = "Nick"
console.log(nome)
var nome = "João"
console.log(nome) 

// O 'var' pode ser redeclarado várias vezes. Quando o 'var' é declarado, a variável é a primeira a ser içada ao topo do código.
//Porém, a variável é declarada com valor 'undefined', por isso o primeiro log não retorna seu valor


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let nome = "Nick"
console.log(nome)
nome = "Pedro"
console.log(nome) */


/* var nome = "Nick"
if(2+2 == 4){
let nome = "João" //'console.log' não retornará "João" pois o 'let' deixa de existir ao final do bloco
}
console.log(nome) */


/* var nome = "Nick"
if(2+2 == 4){
 nome = "João" //Nesse caso, a variável foi reatribuída, logo, o escopo dessa reatribuição será global em vez de 'block scope' caso fosse usado o 'let'
}
console.log(nome) */



// No caso do 'let', ele não é içado ao topo do código e apresenta escopo de bloco, sendo limitado apenas ao bloco de '{}' atual.
// O 'let' Também não pode ser redeclarado, sendo necessário que apenas seja reatribuído o seu valor.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


//myFunc() 
//quando a função e declarada de forma explícita pela expressão 'function', ela é içada e pode ser chamada antes de ser declarada
//já quando usamos o 'var', primeiro a variável é içada, e só depois da inicialização do código seu valor de função é atribuído ==> retorna erro 'is not a function' se for chamado a variável 'myFunc' como função pois esta ainda não foi definida como função, e sim como variável de valor 'undefined'

/*
function myFunc(){
    console.log('Teste')
} //function declaration
//Functions também sofrem hosting
 */

/* 
console.log(myFunc) //Como o var é içado como 'undefined', a função só pode ser executada depois da inicialização do código
var myFunc = function(){
    console.log('Teste')
}
myFunc() //chamando o myFunc depois da declaração do 'var' deve dar certo
 */




///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(nome) //ReferenceError: Cannot access 'nome' before initialization


const nome = "Nick"
//nome = "João" //TypeError: Assignment to constant variable.

console.log(nome)

// 'const' não podem ser redeclaradas nem reatribuir seu valor
// constantes que apontam para objetos podem ter as propriedades desses mesmos objetos reatribuídas:

var num
const pessoa = {
    nome: "Nick",
    idade: 21,
    peso: 78,
    envelhecer(input){
        num = input
        this.idade += num
    }
}

pessoa.peso = 76
pessoa.envelhecer(2)

console.log(`${pessoa.nome} envelheceu ${num} anos e agora tem ${pessoa.idade} anos.`)
