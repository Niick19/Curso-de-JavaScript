const Turma = {
    nometurma:301,
    alunosturma:[]
}
const inputTurma = document.getElementById('idTurma')
const inputInsertAluno = document.getElementById('inserirAluno')
const inputMediaPadrao = document.getElementById('mediaDeAprovacao')
function selectClassgroup() {
    const turmaAtual = (inputTurma.value)
    Turma.nometurma = turmaAtual
    console.log(Turma)
}
function activateKeyboardListener() {
    //console.log('now listening the keyboard!')
    window.addEventListener('keyup', event => {
        //console.log(event.code, event.key) //Logar teclas que estão sendo digitadas
        
        if (event.code === 'Enter' || event.code === 'NumpadEnter'){
            inserirAluno()
        }
})
}
function inserirAluno(){
    const alunoAtual = inputInsertAluno.value
    function isOnList(l){
        if(Turma.alunosturma.indexOf(l) != -1){
            return true
        } else{
            return false
        }
    }
    if (isOnList(alunoAtual)){
        console.log('Aluno ja esta na Lista!')
    }
    else{
        Turma.alunosturma.push(alunoAtual)
        console.log(Turma.alunosturma)
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    }
    }
    
    