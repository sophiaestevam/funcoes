function menu() {

    let opcoes = prompt(`- MENU - \n	a) Inserir Valor de uma Venda \n
	b) Ver status das vendas do dia (numero de vendas e valor total vendido) \n
	c) Inserir Valor de uma Despesa \n 
	d) Ver total de despesas do dia \n
	e) Encerrar`);

    opcaoSelecionada(opcoes)
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


function inserirValor() {

    let venda1 = Number(prompt("Insira o valor da venda 1: "));
    let venda2 = Number(prompt("Insira o valor da venda 2: "));
    let venda3 = Number(prompt("Insira o valor da venda 3: "));

    statusVenda(venda1, venda2, venda3)
    menu()
}


function statusVenda(v1, v2, v3) {

    let total = v1 + v2 + v3
    alert("O valor total das vendas foi: " + total);

    menu()
}

function inserirValorDespesa() {
    let despesa1 = Number(prompt("Insira o valor da despesa 1: "));
    let despesa2 = Number(prompt("Insira o valor da despesa 2: "));
    let despesa3 = Number(prompt("Insira o valor da despesa 3: "));

    totalDespesas(despesa1, despesa2, despesa3)
    menu()
}

function totalDespesas(d1, d2, d3) {
    let total = d1 + d2 + d3
    alert("O valor total das vendas foi: " + total);
}


menu()