/* Funções */

/* As funções são compostas por CHAMADA, AÇÃO, PARÂMETRO e RETORNO.

- Funções são ações que são executadas assim que são chamadas ou em decorrência de algum evento

- Uma função pode receber um parâmetro ou retornar um valor


>>>>> Como as funções dos eventos DOM. estas não recebiam parâmetros e não tinham retorno: onclick = "ação()"
     function ação() {
         }
*/



function parimp(n)/* parâmetro formal */{
    if (n % 2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}

/* console.log(parimp(112)) */

let res = parimp(112) /* parâmetro real */
console.log(res)