//Data Types


let num1 = '10' //números entre '' são letras
let num2 = '2'
console.log (num1 + num2)
// resultado = 102

//Se eu quiser a soma:

let num3 = 10
let num4 = 2
console.log (num3 + num4)
//resultado = 12



//TIPOS DE DATA TYPES
// PRIMITIVE DATA TYPES

//String = Texto
let firstName = 'Augusto'
console.log (firstName, typeof firstName)

//Number = Número
let age = 35
console.log(age, typeof age)

//Boolean = True ou False
let isAdult = true
let isChild = false

//Null = o valor informado no formulário é o que vale, ou seja null tem valor 0 (SEM VALOR)
let address = null
console.log(address, typeof address)

// Undefined
let color // variável declarada, porém não foi informado o valor de color (indefinido)
console.log(color, typeof color)

//TIPOS DE DATA TYPES
// REFERENCE DATA TYPES

//Arrays = lista de itens dentro de uma variável
let numbers = [10, 20, 30, 35, 50]
console.log(numbers, typeof numbers)

//Function
function myName() {
    console.log('Augusto')
}
console.log(myName, typeof myName)

//Date
let now = new Date()
console.log(now)