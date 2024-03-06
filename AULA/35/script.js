function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno('Maria', 45),
    novoAluno('Gabrielle', 19),
    novoAluno('Graziele', 23),
    novoAluno('Janaina', 42)
]

function alunoDaquiA5Anos(aluno) {
    alunoDaquiA5Anos.idade += 5
    return aluno
}
console.log(alunos.map(alunoDaquiA5Anos))