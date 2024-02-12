var nota1 = 1.0
var nota2 = 7.0
var media = (nota1 + nota2) / 2
var conceito = ''
console.log(`Sua média é ${media}`)

if (media >= 8) {
    console.log('ÓTIMO aluno!!')
    conceito = 'ÓTIMO'
} else {
    if (media >= 5) {
        console.log('MÉDIO aluno!!')
        conceito = 'MÉDIO'
    } else {
        console.log('PÉSSIMO aluno!!')
        conceito = 'PÉSSIMO'
    }
}

switch (conceito) {
    case 'ÓTIMO':
        console.log('VOCE É FODA')
        break
    case 'MÉDIO':
        console.log('PODE MELHORAR...')
        break
    case 'PÉSSIMO':
        console.log('VOCE É UM BOSTA')
        break
    default:
        console.log('HOUVE UM ERRO')
        break
}

