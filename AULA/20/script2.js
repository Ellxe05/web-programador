let lista = document.getElementById('lista')
lista.dataset.num = 20

let num = parseInt(lista.dataset.num)
let conteudo = ''

for (let i = 1; i < num; i++) {
    conteudo += '<li>' + i + '</li>'
}

lista.innerHTML = conteudo