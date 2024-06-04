//ARRAYS - LISTAS

let cart = ['Água', 'Arroz', 'Carne', 'Feijão']

cart[1] = 'Laranja' //Mudança de elemento
console.log(cart)
console.log(`A minha comida favorita é ${cart[1]} e ${cart[2]}`)

let number = [10, 20, 33, 40, 5, 13]
console.log(number[3])
console.log(number[0] + number[2])
console.log(number)

//DESAFIO

/*Criar uma solução que concatena o terceiro item dalista abaixo ao texto na console*/

let petShop = ['Dogs', 'Cats', 'Birds', 'Hamsters']

//prints 'In the second cage we have: Birds'

console.log(`In the second cage we have:${petShop[2]}`)
console.log('In the second cage we have:' + petShop[2])