function loaded(){
    let texto = document.getElementById('titulo')
    texto.addEventListener('mouseover', mudarTexto)
    texto.addEventListener('mouseout', mudarTexto2)
}
function mudarTexto() {
    this.innerHTML = 'Oba! Você entendeu!!'
} 
function mudarTexto2() {
    this.innerHTML = 'Oi, passe o mouse aqui!'
}