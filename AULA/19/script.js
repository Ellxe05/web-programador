function mudarCor() {
    let change = document.getElementsByTagName('h1')[0]
    change.style.color = 'green'
}
function mudarTexto() {
    let change = document.getElementsByTagName('h1')[0]
    change.innerHTML = 'Nova cor!'
    setTimeout(mudarCor, 1000)
}