import { firstUpperCase, hasLength, isANumber, isOnList } from "./module.js";
const inputTurma = document.getElementById('idTurma')
const inputInsertAluno = document.getElementById('inserirAluno')
const inputMediaDeAprovacao = document.getElementById('mediaDeAprovacao')
const inputNomeDoConceito = document.getElementById('nomeDoConceito')
const inputValorConceito = document.getElementById('valorConceito')
const selectAluno = document.getElementById('listaDeAlunos')
const selectConceito = document.getElementById('tabelaConceitos')
let alunoSelecionado
let indexAlunoSelecionado
let isAlunoSelected = false

export const Turma = {
    nometurma:301,
    alunosturma:[]
}

export const Conceitos = {
    nomeconceito: [],
    valorconceito: []
}
export let media

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
                else if (inputTurma.matches(':focus')){
                    inserirTurma()
                }
                else if (inputMediaDeAprovacao.matches(':focus')){
                    definirMediaAprovacao()
                    inputNomeDoConceito.focus()
                }
                else if (inputNomeDoConceito.matches(':focus')){
                    inputValorConceito.focus()
                }
                else if (inputValorConceito.matches(':focus')){
                    inserirConceito()
                    inputNomeDoConceito.focus()
                }
            }
        if (event.code === 'Delete'){
            if(isAlunoSelected){
                removeSelectedAluno()
            }
        }
        })
        
}

function clickedButtons(){
    document.getElementById('insTurma').addEventListener("click",inserirTurma)
    document.getElementById('insAluno').addEventListener("click", inserirAluno)
    document.getElementById('defMedia').addEventListener("click", definirMediaAprovacao)
    document.getElementById('insConceito').addEventListener("click", inserirConceito)
    document.getElementById('rmAluno').addEventListener("click", removeSelectedAluno)
}

function insertSelectAluno(){
    let optionAluno = document.createElement('option')
    let ultimoAdicionado = Turma.alunosturma[(Turma.alunosturma.length)-1]
    optionAluno.value = `aluno${ultimoAdicionado}`
    optionAluno.text = ultimoAdicionado
    selectAluno.appendChild(optionAluno)
    selectAluno.size = (Turma.alunosturma.length) + 1
}

selectAluno.addEventListener("change", function(){
    isAlunoSelected = true
    alunoSelecionado = this.selectedOptions[0].text
    indexAlunoSelecionado = Turma.alunosturma.indexOf(alunoSelecionado)
   console.log(alunoSelecionado)
   console.log(indexAlunoSelecionado)
})

function removeSelectedAluno(){
    Turma.alunosturma.splice(indexAlunoSelecionado, 1)
    console.log(Turma.alunosturma)
    selectAluno.remove(indexAlunoSelecionado)
    selectAluno.size = (Turma.alunosturma.length) + 1
    inputInsertAluno.focus()
}

function inserirAluno(){
    const alunoAtual = inputInsertAluno.value 
    if (isOnList(Turma.alunosturma, alunoAtual)){
        console.log('Aluno ja esta na Lista!')
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    } else if(!hasLength(inputInsertAluno.value)){
        window.alert('Por favor, digite um valor com um ou mais caracteres')
        inputInsertAluno.blur()
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    } else if (isANumber(inputInsertAluno.value)){
        alert('Por favor, insira um nome válido')
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    }
    else{
        if(Turma.alunosturma.length == 0){selectAluno.innerHTML = ''}
        Turma.alunosturma.push(firstUpperCase(alunoAtual))
        insertSelectAluno()
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

function definirMediaAprovacao(){
    media = 6
    const mediaDeAprovacao = Number(inputMediaDeAprovacao.value)
    if (hasLength(inputMediaDeAprovacao.value)){
    media = mediaDeAprovacao
    console.log(media)
    } else {
    console.log(media)
    }
    inputMediaDeAprovacao.value = ''
    
}

function inserirConceito(){
    const conceito = inputNomeDoConceito.value
    const valorConceito = Number(inputValorConceito.value)
    //console.log(conceito, valorConceito)
    Conceitos.nomeconceito.push(conceito)
    Conceitos.valorconceito.push(valorConceito)
    inputNomeDoConceito.value = ''
    inputValorConceito.value = ''
    inputValorConceito.blur()
    console.log(Conceitos)
}