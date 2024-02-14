function changeH1(input){
    let h1 = document.getElementsByTagName('h1')[0]
    h1.innerHTML = input.value
}
function hideH1() {
    let h1 = document.getElementsByTagName('h1')[0]
    let div = document.getElementsByTagName('div')[0]
    h1.style.display = 'none'
    div.innerText = 'Você clicou!!'
    div.style.backgroundColor = 'darkgreen'
}