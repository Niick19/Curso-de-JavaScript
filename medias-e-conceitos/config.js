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
function insertIntoInputs() {
    console.log('now listening the keyboard!')
    window.addEventListener('keyup', event => {
        console.log(event.code, event.key) //Logar teclas que estão sendo digitadas
        
            if (event.code === 'Enter' || event.code === 'NumpadEnter'){
                if (inputInsertAluno.matches(':focus')){
                    inserirAluno()
                }
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
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    } else if(inputInsertAluno.value.length <= 1){
        window.alert('Por favor, digite um nome válido com 2 ou mais caracteres')
        inputInsertAluno.blur()
        inputInsertAluno.value = ''
        console.log(alunoAtual.length)
    }
    else{
        Turma.alunosturma.push(alunoAtual)
        console.log(Turma.alunosturma)
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    }
    }
    
    