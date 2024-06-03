//OPERADORES DE COMPARAÇÃO

//IGUALDADE SOLTA (dado)
console.log(3 == '3')
console.log (3 == 3)

//IGUALDADE ESTRITA (DADO E TIPO)
console.log(3 === 3)
console.log(3 === '3')

//DESIGUALDADE SOLTA
console.log (3 != '3')
console.log (3 != 4)

//DESIGUALDADE ESTRITA
console.log (3 !== 4)
console.log (3 !== 3)
console.log (3 !== '3')

// MAIOR QUE
console.log (3 > 5)
console.log(8 > 5)

// MENOR QUE
console.log (3 < 5)

//MAIOR OU IGUAL
console.log (3 >= 5)

//MENOR OU IGUAL
console.log (3 <= 5)

//COERÇÃO DE TIPO (ATRIBUIÇÃO FORÇADA DE TIPO)

let total
total = 3 + '5' //CONVERTE SEMPRE PARA STRING
total = 3 + Number('5') //solução para somar 
console.log(total, typeof total)

let total1
total1 = '5' - 4 //J.S SEMPRE CONVERTE SUBT. PARA NUMBER
console.log(total1, typeof total1)

let total2
total2 = '5' * 4 //J.S SEMPRE CONVERTE MULT. PARA NUMBER
console.log(total2, typeof total2)

let total3
total3 = '20' / 4 //J.S SEMPRE CONVERTE DIVSÃO. PARA NUMBER
console.log(total3, typeof total3)

//CONCATENAÇÃO DE STRINGS

let firstName = 'Augusto'
let lastName = 'Fumagalli'
fullName = firstName + lastName
//console.log(fullName) - OPÇÃO QUE FICA JUNTO OS NOMES
console.log(firstName + ' ' + lastName)