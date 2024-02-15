let aluno = {
    nome: 'Gabrielle',
    nota: 10
}
console.log(aluno)

let j = JSON.stringify(aluno)
console.log(j)

let j2 = JSON.parse(j)
console.log(j2)