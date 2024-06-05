//IF E ELSE (SE, SE NÃO)
//Você consegue definir o fluxo do código

/*if (condição) { CODIÇÃO SÓ PODE SER TRUE OU FALSE
    Vai executar se a condição for verdadeira
} else {
    Vai executar se a condição for falsa
}
*/

let hour = 3
if (hour < 4) {
    console.log('Boa tarde')
} else{
    console.log('Bom dia')
}

//ELSE IF

/*if (condição_1) { CODIÇÃO SÓ PODE SER TRUE OU FALSE
    Vai executar se a condição_1 for verdadeira
} else if (condição_2) {
    Vai executar se a condição_1 for falsa condição_2 for verdadeira
} else {
    Vai executar se todas as condições forem falsas
}
*/

let hour1 = 19
if (hour1 <= 12) {
    console.log('Boa dia')
} else if(hour1 <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

//SHORTHAND IF (NÃO É OBRIGATÓRIO O USO DOS {})
let hour2 = 2
if (hour2 <= 12) console.log('Boa dia')
else if(hour2 <= 18) console.log('Boa tarde')
else console.log('Boa noite')

//DESAFIO

let nota = 5

if (nota >= 90){
    console.log('Excelente')
} else if (nota >= 75) {
    console.log('Muito bom')
} else {
    console.log('Você pode melhorar')
}