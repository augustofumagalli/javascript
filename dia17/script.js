//Truthy e Falsy

// Operador Ternário

let idade = 19

if (idade < 18){
    console.log('Menor de idade')
} else{
    console.log('Maior de idade')
}

let idade1= 20
let resultado = idade1 < 18 ? 'Menor' : 'Maior'
console.log(resultado)
// ? - If
// : - Else

let idade2 = 17
idade2 < 18 ? console.log('Menor') : console.log('Maior')

//DESAFIO: CONVERTER O CÓDIGO ABAIXO EM OPERADOR TERNÁRIO

let nota = 40
let avaliacao

/*if (nota >= 90){
    avaliacao = 'Excelente'
} else if (nota >= 70) {
    avaliacao = 'Bom'
} else if (nota >= 50) {
    avaliacao = 'Satisfatório'
} else {
    avaliacao = 'Isatisfatório'
}

console.log(avaliacao)*/

nota >= 90 ? console.log('Excelente') : nota >= 70 ? console.log('Bom') : nota >=50 ? console.log('Satisfatório') : console.log('Insatisfatório')