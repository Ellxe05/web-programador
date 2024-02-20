let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(400, 300)
ctx.strokeStyle = 'yellow'
ctx.lineWidth = 3
ctx.stroke()

ctx.beginPath()
ctx.moveTo(50, 10)
ctx.lineTo(300, 300)
ctx.lineTo(200, 300)
ctx.lineWidth = 3
ctx.strokeStyle = 'white'
ctx.fillStyle = 'pink'
ctx.closePath()
ctx.fill()
ctx.stroke()