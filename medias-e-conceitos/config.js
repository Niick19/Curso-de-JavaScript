import { firstUpperCase, hasLength, isANumber, isOnList } from "./module.js";
const Turma = {
    nometurma:301,
    alunosturma:[]
}
const inputTurma = document.getElementById('idTurma')
const inputInsertAluno = document.getElementById('inserirAluno')
const inputMediaPadrao = document.getElementById('mediaDeAprovacao')
window.onload = insertIntoInputs()

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

function inserirAluno(){
    const alunoAtual = inputInsertAluno.value 
    if (isOnList(Turma.alunosturma, alunoAtual)){
        console.log('Aluno ja esta na Lista!')
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    } else if(!hasLength(inputInsertAluno.value)){
        window.alert('Por favor, digite um valor com 2 ou mais caracteres')
        inputInsertAluno.blur()
        inputInsertAluno.value = ''
    } else if (isANumber(inputInsertAluno.value)){
        alert('Por favor, insira um nome válido')
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    }
    else{
        Turma.alunosturma.push(firstUpperCase(alunoAtual))
        console.log(Turma.alunosturma)
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    }
}

    
function inserirTurma() {
    const turmaAtual = (inputTurma.value)
    if(hasLength(turmaAtual)){
        Turma.nometurma = turmaAtual
        inputTurma.value = ''
        inputInsertAluno.focus()
        console.log(Turma)
    } else{
        inputTurma.value = ''
        return alert('Insira uma turma válida!')
    }
}