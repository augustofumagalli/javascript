//DATA E HORA
//O Mês de Janeiro é o mês 0

let agora = new Date()
console.log(agora)

let dataEspecifica = new Date(2024, 5, 20, 10, 35, 0)
console.log(dataEspecifica)

let dataString = new Date('2024/10/20 10:35:00')
console.log(dataString)

//Métodos para Dates

let data = new Date()
//Dia do mês
//data.setDate(9) - Altero manualmente o dia 
console.log(data.getDate())

//Dia da semana (0-6) onde 0 é domingo
console.log(data.getDay())

//O mês (0-11) onde 0 é Janeiro
//data.setMonth(0) - Altero manualmente o mês
console.log(data.getMonth())

//O ano
//data.setFullYear(2022)
console.log(data.getFullYear())


//CALCULADORA DE DATAS
//eu tenho uma data de início e fim. Quero saber a diferença entre as datas

let inicio = new Date('2024/10/15')
let fim = new Date('2025/11/15')
let totalDias = (fim - inicio) / (1000 * 3600 * 24)
console.log(totalDias) //Total é dado em milisegundos, logo precisamos dividir para achar em dias


//IDIOMA
// Data no Brasil = DD/MM/AAAA
//Data nos EUA = MM/DD/AAAA

let Data1
data1 = Intl.DateTimeFormat('en-US').format(data)
console.log(data1)

let Data
data2 = Intl.DateTimeFormat('pt-br').format(data)
console.log(data2)