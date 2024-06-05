// IF ELSE com o NOT Operator

let num1 = -5

if (!(num1 > 0)){ //! retorna o contrário
    console.log('Favor, digitar um número positivo')
}

//1 MANEIRA
let usuarioLogado = false

if (usuarioLogado) {
    console.log('Vc está logado')
} else{
    console.log('Vc não está logado')
    }

// 2 MANEIRA
let usuarioLogado1 = false

if (!usuarioLogado1){
    console.log('Vc precisa estar logado')
}


//VERIFICAR SE A LISTA TEM ALGUM ITEM OU NÃO
let listaProdutos = []

if(listaProdutos.length){
    console.log('A lista tem produtos')
} else{
    console.log('A lista está vazia')
}

//OU

let listaProdutos1 = []

if(!listaProdutos1.length){
    console.log('A lista está vazia')
}

//DESAFIO

let corProduto = 'Verde'

if (!(corProduto == 'Azul')){
    console.log('Não temos essa cor')
}