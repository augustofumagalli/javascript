// Static ou Dynamic

// Static
// C, C++, Java, TypeScript

//Dynamic: O próprio programa já entende o tipo da variável
//Python, JavaScript, Ruby, PHP
let firstName = 'Augusto'
let idade = 35

//Convertion ou Casting

//CONVERTENDO STRING PARA NUMBER

let age = '35' //String
console.log (age, typeof age) //vai aparecer como String, logo não conseguimos fazer cálculos

//ParseInt (Retorna sempre um número inteiro)
age = parseInt(age)
console.log(age, typeof age)

//ParseFloat (Rotorma um valor fracionário)
let age1 = '35.2' //String
age1 = parseFloat(age1)
console.log(age1, typeof age1)

//Operador Unário (+)

let age2 = '35' //String
age2 = +age2
console.log(age2, typeof age2)

//Number (Número)
let age3 = '45.55'  //String
age3 = Number(age3)
console.log(age3, typeof age3)

//CONVERTENDO NUMBER PARA STRING

let age4 = 33 //Número
console.log(age4, typeof age4)

//1º formato
age4 = age4.toString()
console.log(age4, typeof age4)

//2º formato
let age5 = 33 //Número
console.log(age5, typeof age5)
age5 = String(age5)
console.log(age5, typeof age5)

//CONVERTENDO NÚMERO PARA BOOLEAN (true ou false)

//Number 0 = false
//Number 1.... = true

let age6 = 0
console.log (age6, typeof age6)
age6 = Boolean (age6)
console.log (age6, typeof age6)

