let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')
let x = 250
let y = 250
let raio = 100
let inicio = 0
let fim = 2 * Math.PI

ctx.beginPath()
ctx.strokeStyle = 'lightgreen'
ctx.fillStyle = 'yellow'
ctx.arc(x, y, raio, inicio, fim)

ctx.fill()
ctx.stroke()