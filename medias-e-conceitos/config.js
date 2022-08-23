const Turma = {
    nometurma:301,
    alunosturma:[]
}
const inputTurma = document.getElementById('idTurma')
const inputInsertAluno = document.getElementById('inserirAluno')
const inputMediaPadrao = document.getElementById('mediaDeAprovacao')

 function insertIntoInputs() {
    console.log('now listening the keyboard!')
    window.addEventListener('keyup', event => {
        //console.log(event.code, event.key) //Logar teclas que estão sendo digitadas
        
        if (event.code === 'Enter' || event.code === 'NumpadEnter'){
                if (inputInsertAluno.matches(':focus')){
                    inserirAluno()
                }
                if (inputTurma.matches(':focus')){
                    inserirTurma()
                }
            }
            
        })  
    }
    
function isOnList(object, value){
    if (object.indexOf(value) != -1){
        return true
    } else{
        return false
    }
}
function hasLength(input){
    if(input.length <= 1){
        window.alert('Por favor, digite um valor com 2 ou mais caracteres')
        return true
    }
}

function inserirAluno(){
    const alunoAtual = inputInsertAluno.value

    if (isOnList(Turma.alunosturma, alunoAtual)){
        console.log('Aluno ja esta na Lista!')
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    } else if(hasLength(inputInsertAluno.value)){
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

    
function inserirTurma() {
    const turmaAtual = (inputTurma.value)
    Turma.nometurma = turmaAtual
    inputTurma.value = ''
    inputInsertAluno.focus()
    console.log(Turma)
} 