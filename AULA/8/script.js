let nomes = ['André','Graziele', 'Rodrigo', 'Gabrielle']
let notaA = [5.5, 6.0, 9.1, 5.0]
let notaB = [7.4, 8.2,7.5 , 9.5]

function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    if(media >= 5) {
        return 'APROVADO'
    } else {
        return 'REPROVADO'
    }
}

for (let index in nomes) {
    let nota1 = notaA[index]
    let nota2 = notaB[index]
    let m = media(nota1, nota2)

    console.log(nomes[index] + ': ' + nota1 + ' - ' + nota2 + ' = ' + m + ' / ' + passou(m))
}