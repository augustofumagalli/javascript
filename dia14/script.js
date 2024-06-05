//IF e ELSE com operadores lógicos(&& E, OU)

//Criar um site de evento online. A idade mínima deve ser maior ou igual a 18 e o registro online precisa ser true.

//&& E
let idadeParticipante = 12
let registroOnline = true

if (idadeParticipante >= 18 && registroOnline) {
    console.log('Bem vindo ao evento')
} else {
    console.log('Você precisa ter 18 anos e estar registrado no exemplo')
}
// AS DUAS CONDIÇÕES PRECISAM SER TRUE PARA RETORNAR A MENSAGEM DESEJADA

// || OU
/*App onde o candidato vai receber um desconto se for estudante ou tiver um cupom de desconto
*/

let estudante = false
let cupom = true

if (estudante || cupom) {
    console.log('Vc tem acesso a promoção especial')
} else {
    console.log('Vc precisa ter acesso a um cupom ou ser estudante para a promoção')
}
//UMA DAS CONDIÇÕES PRECISA SER VERDADEIRA E NÃO NECESSARIAMENTE AS DUAS.

//&& E e || OU ao mesmo tempo
/* App para um restaurante que oferece desconto para famílias maiores que 4 e venham almoçar na terça ou quarta feira
*/

let membrosFamlia = 3
let diaDaSemana = 'qui'

if (membrosFamlia >=4 && diaDaSemana === 'ter' || diaDaSemana === 'qua') {
    console.log('Parabéns! A sua família ganhou um desconto especial')
} else {
    console.log('Traga mais gente')
}

//COLOCANDO UM IF DENTRO DE OUTRO IF (NASTING)
/*App de análise de jogo
nível = true ou false
    >= 90 -> Ouro
    >= 75 -> Prata
    < 75 -> Bronze
nível = false
    Vc tem que alcançar o nível
*/

let nivelCompleto = true
let pontuacaoJogador = 91

if (nivelCompleto) {
    if (pontuacaoJogador >= 90){
        console.log('Medalha de ouro')
    } else if (pontuacaoJogador >= 75) {
        console.log('Medalha de prata')
    } else {
        console.log('Medalha de bronze')
    }
} else {
    console.log('Vc precisa alcançar o nível')
}

//DESAFIO
let usuarioValido = true
let senhaCorreta = true
let temPermissão = false

if (usuarioValido) {
    if (senhaCorreta) {
        if (temPermissão){
            console.log('Acesso permitido')
        } else {
            console.log('Usuário sem permissão')
        }
    } else {
        console.log('Senha incorreta')
    }
} else {
    console.log ('Usuário inválido')
}