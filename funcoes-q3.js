let livros = [];


function menu (){

    let op = prompt(` - MENU - \n a) Inserir dados do livro \n
	b) Imprimir Nomes de todos os livros cadastrados\n
	c) Imprimir Todos os dados de um livro específico\n
	d) Imprimir todos os dados dos livros de um autor específico\n
	e) Encerrar
`)

    opcaoSelecionada (op)
} 

function opcaoSelecionada (op) {

    switch (op) {

        case 'a':
            inserirValor()
            break;

        case 'b':
            statusVenda()
            break
    
        case 'c':
            inserirValorDespesa()
            break

         case 'd':
             totalDespesas()
            break;

        default:
            break;
    }
}


function inserirDados () {

    let nome =  prompt(`digite o nome do livro: `);
    let ano = prompt(`digite o ano da publicação: `);
    let autor = prompt(`digite o nome do autor:  `);
    let avaliaçao = prompt(`digite o ano da publicaçao`); 

    livros.push({nomeLivro: nome, anoPubli: ano, autorLivro: autor, avaliacao: avaliaçao });
}


function nomeLivros () {

    return `Nomes dos livros ${livros.nome}`
}

function imprimirDadosEspecificos (nome) {

    if(nome == livros.nome) {
        alert(`Nome: ${livros.nome} \n
            Ano de publicação: ${livros.anoPubli} \n 
            Autor: ${livros.autorLivro} \n 
            Avaliação: ${livros.avaliacao}`)
    }

    else {
        alert("Livro nao encontrado")
    }

}


function autorEspecifico (autor) {

    if(autor == livros.nome) {
        alert(`Nome: ${livros.nome}`)
    }

    else {
        alert("Autor nao encontrado")
    }
}