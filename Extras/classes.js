class Livro {
    constructor(nomeLivro, editora, paginas){
        this.nomeLivro = nomeLivro
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: "${this.nomeLivro}"`)
    }
    descreverLivro(){
        console.log(`O Livro "${this.nomeLivro}" é um livro da editora "${this.editora}" e tem ${this.paginas} páginas`)
    }
}

const livroNodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)
livroNodeJS.anunciarTitulo()
livroNodeJS.descreverLivro()
console.log(typeof(Livro))


/* Diferença de classes e funções:
As classes no JavaScript não são 'hoisted'. Ou seja, elas não são içadas ao topo do código na sua inicialização, diferentemente das funções, que podem ser declaradas em qualquer lugar do código
*/

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////    Herança através de Classes:    //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
 
class LivroColecao extends Livro {
    constructor(nomeLivro, nomeColecao){
        super(nomeLivro) //com o 'super' se indica qual(is) propriedades herdar da classe pai
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`O livro "${this.nomeLivro}" faz parte da coleção "${this.nomeColecao}"`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()