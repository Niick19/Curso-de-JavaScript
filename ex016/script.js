function verificar(){
    var numoutput = Number(document.getElementById('num').value)
    var resultado = document.querySelector('div#resultado')

    if(numoutput == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
    var num =''
       if (numoutput % 2 === 0){
         num = 'Par'
       }
       else {
         num = 'Ímpar'
       }
       resultado.innerHTML = `O número <strong>${numoutput}</strong> é um número <em><strong>${num}</strong></em>!`
    }
}