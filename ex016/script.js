function verificar(){
    var numinput =  document.getElementById('num').value
    var numoutput = Number(numinput)
    var resultado = document.querySelector('div#resultado')

    if (numinput.length >= 17 ){
      window.alert('[Erro] Insira um número de até 16 dígitos')
    }
    else if(numoutput == 0){
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