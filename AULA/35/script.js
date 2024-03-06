function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno('Maria', 45),
    novoAluno('Gabrielle', 19),
    novoAluno('Graziele', 23),
    novoAluno('Janaina', 42)
]

function menorQue30(aluno) {
    return aluno.idade < 30
}
function maiorQue30(aluno) {
    return aluno.idade > 30
}

console.log(alunos.filter(maiorQue30))
console.log(alunos.filter(menorQue30))