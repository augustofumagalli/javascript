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

//MÉTODOS EM ARRAYS

let cart1 = ['Água', 'Arroz', 'Carne', 'Feijão']

//Quero adicionar um elemento na Array
cart1[4] = 'Suco' //Modo 1
cart1.push('Suco') //Modo 2 e mais indicado
cart1.pop() //Remove o último item da Array
cart1.shift() //Remove o primeiro item da array
cart1.unshift('Suco')// Adiciona um item no começo da Array
cart1.sort()//Organiza em orde alfabética
console.log(cart1)

let y
y = cart1.includes('Arroz') //Mostra se o valor exite dentro de uma array. Precisa ser igual
console.log(y)

let y1
y1 = cart1.indexOf('Feijão') //Encontra o índice da array
console.log(y1)

let y2
y2 = cart1.slice(1, 3) //Mostra da posição inicial. Se colocar (1, 3) o índice 3 não entra. O SLICE NÃO ALTERA A ARRAY
console.log(y2)

let y3
y3 = cart1.splice(1, 3) //Retorna o último índice. O SPLICE ALTERA A ARRAY E RETIRA OS ITENS DA ARRAY ORIGINAL
console.log(y3)

//CHAIN - CORRENTES DE MÉTODOS

let cart2 = ['Paulo', 'Afonso', 'Lucia', 'Carol']
let k
k = cart2.splice(1, 3).sort().reverse().toString()
console.log(k)


//NASTING (ALINHAMENTO)
let cart3 = ['Paulo', 'Afonso', 'Lucia', 'Carol']
let Number1 = [5, 7, 4, 80, 30, 45]
cart3.push(Number1)
console.log(cart3)

let cart3Number1 = [cart3, Number1]
console.log(cart3Number1)

y4 = cart3Number1[0][3]
console.log(y4)

y5 = cart3Number1[1][3]
console.log(y5)