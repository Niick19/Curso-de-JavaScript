import { firstUpperCase, hasLength, isANumber, isOnList } from "./module.js";
const inputTurma = document.getElementById('idTurma')
const inputInsertAluno = document.getElementById('inserirAluno')
const inputMediaDeAprovacao = document.getElementById('mediaDeAprovacao')
const inputNomeDoConceito = document.getElementById('nomeDoConceito')
const inputValorConceito = document.getElementById('valorConceito')
export const Turma = {
    nometurma:301,
    alunosturma:[]
}
export const Conceitos = {
    mediaaprovacao: 6,
    definirMediaAprovacao(){
        const mediaDeAprovacao = inputMediaDeAprovacao.value
        Conceitos.mediaaprovacao = Number(mediaDeAprovacao)
        console.log(Conceitos)
    },
    criarNovoConceito(){
        const nomeDoConceito = inputNomeDoConceito.value
        const valorConceito = inputValorConceito.value
        Conceitos.nomedoconceito = nomeDoConceito
        Conceitos.valorconceito = Number(valorConceito)
        console.log(Conceitos)
    }
}
window.onload = insertIntoInputs()

function insertIntoInputs() {
    console.log('now listening the keyboard!')
    clickedButtons()
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
function clickedButtons(){
    document.getElementById('insTurma').addEventListener("click",inserirTurma)
    document.getElementById('insAluno').addEventListener("click", inserirAluno)
    document.getElementById('defMedia').addEventListener("click", Conceitos.definirMediaAprovacao)
    document.getElementById('insConceito').addEventListener("click", Conceitos.criarNovoConceito)
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
        inputInsertAluno.focus()
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