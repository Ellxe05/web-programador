function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}
var Gabrielle = {
    nome: 'Gabrielle',
    sobreNome: 'Silva',
    notas: [7.5, 10],
    media: calcMedia
}

console.log(Gabrielle.nome)
console.log(Gabrielle.media())