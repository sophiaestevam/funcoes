function soma(a,b){
    return a + b
}

function subtracao(a,b){
    return a - b
}

function multiplicacao(a,b){
    return a * b
}

function divisao(a,b){
    if(b != 0){
        return a/b
    }
    else{
        alert("ERRO! Divisão por zero")
        return
    }
   
}

function operacao(num1,num2,op){
   let res
    switch(op){
        case '1': res = soma(num1.num2)
            break;

            case '2': res = subtracao(num1.num2)
            break;

            case '3': res = multiplicacao(num1.num2)
            break;
            
            case '1': res = soma(num1.num2)
            break;
    }
    return res
    
}



function menu() {
    let escolha = 0 

    do{
        escolha = prompt(`calculadora
            1-soma
            2-subtracao
            3-multipliccao
            4-divisao
            0-sair`)

            if(escolha >= 1 && escolha <5){
                let n1 = parseFloat (prompt("digite o primeiro numero"))
                let n2 = parseFloat (prompt("digite o segundo numero"))
                let resultado = parseFloat (operacao(n1, n2,escolha))
                alert("O resultado foi " + resultado)
            }
    } while (escolha != 0)
}

menu()