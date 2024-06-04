//ARRAYS - CONCATENATE - Os itens de uma array dentro de uma outra arrey sem fazer o Nasting

let cart = ['Água', 'Arroz', 'Feijão', 'Macarrão']
let number = [10, 5, 30, 50, 80]
//cart.push(number)
let y
y = cart.concat(number)

console.log(cart)
console.log(y)

//ARRAYS - NÚMEROS ESTÁTICOS

let num1 = 10
let num2 = 20
let num3 = 30

let allNumbers = Array.of(num1, num2, num3)
console.log(allNumbers)

let y1
y1 = Array.from('122')
console.log(y1)

//ARRAYS - NESTED ARRAYS - CRIANDO UMA ARRAY DENTRO DE OUTRA ARRAY

let number2 = [10, 11, 12, 13, [20, 21, 22], 14, 15, [80, 90, 100]]
console.log(number2)

let y2
y2 = number2.flat() //TODOS OS ITENS DA LISTA EM UMA SÓ LISTA
console.log(y2)

//DESAFIO

let num4 = [10, 20, 30, 40, 50]
let num5 = [90, 80, 70, 60, 50]

let y6
y6 = num4.slice(0,4).concat(num5).sort()
console.log(y6)