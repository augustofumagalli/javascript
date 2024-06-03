// TEMPLATE LITERALS
// PARA EVITAR CONCATENAÇÕES, FAZEMOS O EXEMPLO ABAIXO

let age = 38
let firstName = 'Augusto'
let lastName = 'Pereira'

console.log(`Olá. Meu nome é ${firstName} ${lastName} e eu tenho ${age} anos de idade`)

//STRINGS METHODS

let texto = '  Estou aprendendo JavaScript'

console.log(texto.charAt(4)) //Acha o caracter - começa sempre com 0
console.log(texto.includes('JavaScript')) //Retorna um boolean (Verdadeiro ou falso)
console.log(texto.indexOf('aprendendo')) //Informa onde começa a palavra
console.log(texto.slice(0, 4))//Corta as palavras e me mostra os caracteres informados
console.log(texto.toUpperCase())//Coloca tudo em letra maiúscula
console.log(texto.toLowerCase())//Coloca tudo em letra minúscula
console.log(texto.trim())//Romove espaços tanto no fim quanto no final. No meio não remove
console.log(texto.repeat(5))//Repete o texto 5 vezes, no caso
console.log(texto.replace('Estou', 'Eu estou'))//Troca a primeira '' para a segunda ''

//NUMBER METHODS

let num1 = 3.3725

console.log(num1)
console.log(num1.toFixed(3))//Números de casas após a vírgula.
console.log(num1.toPrecision(4))
console.log(num1.toString(2))//Transforma para formato binário

//MÉTODOS MATEMÁTICOS (Math) - OBJETOS

let num2 = 2.7

console.log(Math.round(num2))//Arredondamento de números fracionados 
console.log(Math.ceil(num2))//Arredonda SEMPRE para cima
console.log(Math.floor(num2))//Arrendoda SEMPRE para baixo
console.log(Math.sqrt(num2))//Raíz quadrada
console.log(Math.pow(num2, 3))//Potenciação
console.log(Math.abs(num2))//Número absoluto
console.log(Math.round(Math.random() * 10 + 1))//Um número inteiro (round) randômico entre 1 e 10

//OBJETOS (MULTIPLOS VALORES)
//Ex.: Tesla

let carName = 'Cybertruck'
let carRange = 340
let carMaxSpeed = 112
let carHorsePower = 600

let car = { //Maneira que o javascript reconhece vários objetos
    Name: 'Cybertruck',
    Range: 340,
    MaxSpeed: 112,
    HorsePower: 600
}

console.log(car)