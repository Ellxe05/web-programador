let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')
let img = new Image()
img.src = 'grama.jpg'
img.onload = desenharImg

function desenharImg() {
    ctx.drawImage(this, 2, 2, this.naturalWidth / 2, this.naturalHeight / 2)
}    