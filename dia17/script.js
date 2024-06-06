// PRECEDÊNCIA DOS OPERADORES

//SWITCH e CASE (SE PARECE O IF E ELSE)
//IDEAL PARA VÁRIAS COMPARAÇÕES AO MESMO TEMPO

// Switch e Case com números
// Dia 1 é domigo
let dia = 7

switch (dia) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sábado')
        break
    default:
        console.log('Número inválido')
}


//Switch e Case com Strings

let userLevel = 'admin' //admin, editor, guest

switch (userLevel){
    case 'admin':
        console.log('Full access')
        break
    case 'editor':
        console.log('Editor Level')
        break
    case 'guest':
        console.log('Limited access')
        break
    default:
        console.log('Enknown User')
}

//DESAFIO
/*Criar uma solução com o "Switch" que retorne:
hora < 12: Bom dia
hora < 18: Boa tarde
hora >= 18: Boa noite
A hora é local
*/

let dataAtual = new Date()
let horaAtual = dataAtual.getHours()

switch(true){
    case horaAtual < 12:
        console.log('Bom dia')
        break
    case horaAtual < 18:
        console.log('Boa tarde')
        break
    default:
        console.log('Boa noite')
}