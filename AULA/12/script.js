var dia = new Date ('2005-sep-16, 12:22:00')
var diasem = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

console.log(dia)
console.log(diasem[dia.getDay()])
console.log(dia.getHours())
console.log(dia.getMinutes())
console.log(dia.getSeconds())
console.log(dia.getMonth())
console.log(dia.getTime())

console.log(dia.setDate(28))
console.log(dia)