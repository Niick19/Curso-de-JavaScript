//DSDB ==> Dumb Scholar Database
//Made by Nicolas Chaves from https://github.com/nicolascoutochaves

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
let conceitoSelecionado
let indexConceitoSelecionado
let isConceitoSelected = false
export const Turma = {
    nometurma:301,
    alunosturma:[]
}
export const Conceitos = {
    nomeconceito: [],
    valorconceito: []
}
export let media

window.onload = initialize()
function initialize() {
    console.log('Initializing config.js')
    function keyboardListener(){
        
        console.log('now listening the keyboard!')
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
                else if (isConceitoSelected){
                    removeSelectedConceito()
                }
            }
            })
            
    }
    
    function clickedButtons(){
        console.log('waiting for click events')
        document.getElementById('insTurma').addEventListener("click",inserirTurma)
        document.getElementById('insAluno').addEventListener("click", inserirAluno)
        document.getElementById('defMedia').addEventListener("click", definirMediaAprovacao)
        document.getElementById('insConceito').addEventListener("click", inserirConceito)
        document.getElementById('rmAluno').addEventListener("click", removeSelectedAluno)
        document.getElementById('rmConceito').addEventListener("click", removeSelectedConceito)
    }
    
    function selectListener(){
        selectAluno.addEventListener("change", function(){
            isAlunoSelected = true
            alunoSelecionado = this.selectedOptions[0].text
            indexAlunoSelecionado = Turma.alunosturma.indexOf(alunoSelecionado)
           console.log(alunoSelecionado)
           console.log(indexAlunoSelecionado)
        })
        
        selectConceito.addEventListener("change", function(){
            isConceitoSelected = true
            conceitoSelecionado = this.selectedOptions[0].value
            indexConceitoSelecionado = Conceitos.nomeconceito.indexOf(conceitoSelecionado)
            console.log(conceitoSelecionado)
            console.log(indexConceitoSelecionado)
        })
    }
    clickedButtons()
    selectListener()
    keyboardListener()
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


function inserirAluno(){
    const alunoAtual = inputInsertAluno.value 
    if (isOnList(Turma.alunosturma, firstUpperCase(alunoAtual))){
        window.alert('Aluno ja esta na Lista!')
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    } else if(!hasLength(inputInsertAluno.value)){
        window.alert('Por favor, digite um valor com um ou mais caracteres')
        inputInsertAluno.blur()
        inputInsertAluno.value = ''
        inputInsertAluno.focus()
    } else if (isANumber(inputInsertAluno.value)){
        window.alert('Por favor, insira um nome válido')
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
function insertSelectAluno(){
    let optionAluno = document.createElement('option')
    let ultimoAdicionado = Turma.alunosturma[(Turma.alunosturma.length)-1]
    optionAluno.value = `aluno${ultimoAdicionado}`
    optionAluno.text = ultimoAdicionado
    selectAluno.appendChild(optionAluno)
    selectAluno.size = (Turma.alunosturma.length) + 1
}
function removeSelectedAluno(){
    Turma.alunosturma.splice(indexAlunoSelecionado, 1)
    console.log(Turma.alunosturma)
    selectAluno.remove(indexAlunoSelecionado)
    selectAluno.size = (Turma.alunosturma.length) + 1
    inputInsertAluno.focus()
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
    if(isOnList(Conceitos.nomeconceito, firstUpperCase(conceito)) || isOnList(Conceitos.valorconceito, valorConceito)){
        window.alert('Conceito ou valor já atribuído')
    }
    else {
        if(Conceitos.nomeconceito.length == 0){selectConceito.innerHTML = ''}
        Conceitos.nomeconceito.push(conceito.toUpperCase())
        Conceitos.valorconceito.push(valorConceito)
        insertSelectConceito()
        inputNomeDoConceito.value = ''
        inputValorConceito.value = ''
        inputValorConceito.blur()
        console.log(Conceitos)
}
}
function insertSelectConceito(){
    let optionConceito = document.createElement('option')
    let ultimoAdicionado = Conceitos.nomeconceito[(Conceitos.nomeconceito.length)-1]
    optionConceito.value = ultimoAdicionado
    optionConceito.text = `Conceito '${ultimoAdicionado}' vale ${Number(Conceitos.valorconceito[(Conceitos.valorconceito.length)-1])}`
    selectConceito.appendChild(optionConceito)
    selectConceito.size = (Conceitos.nomeconceito.length) + 1
}
function removeSelectedConceito(){
    Conceitos.nomeconceito.splice(indexConceitoSelecionado, 1)
    Conceitos.valorconceito.splice(indexConceitoSelecionado, 1)
    console.log(Conceitos)
    selectConceito.remove(indexConceitoSelecionado)
    selectConceito.size = (Conceitos.nomeconceito.length) + 1
    inputNomeDoConceito.focus()
}



//WARNING:
/* 
This code was made for me when I just learned the basics of JavaScript.
JavaScript is my very first programming language. I made this code with only 6 months of practice and theory. It is not a professional program.
You can use this code just for study or for improve it and make something useful with it.

DO NEVER use this for store real scholar sensitive information. If you wanna do this, do it for you own risk and just in your personal computer.
NEVER expose this code on a server. If tou wanna do this, do the appropriate security improvements (several and extensive improvements).

All these lines of code were write just for fun and to improve my knowledge
Thanks for tou attention and follow me on https://github.com/nicolascoutochaves . If you have a suggestion, create a pull request or open a issue.
 */