// ---------------RETORNA--OBJETO-----------------
function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turmaA = [
    criarAluno('Alex', 9, 7),
    criarAluno('Gabrielle', 7, 4),
    criarAluno('Monique', 7, 6)
]
var aluno = turmaA[1]
for (var aluno of turmaA) {
    console.log(aluno.nome + ' = ' + aluno.media())
}


// -----------------OBJETO------------------------

function aluno(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function() {
        return (this.nota1 + this.nota2) / 2
    }
}

let a = new aluno('Graziele', 8, 7)
console.log(a.media())