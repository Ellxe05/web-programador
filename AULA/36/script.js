let nome = ''

try {
    if (nome == '') {
        throw 'O nome não pode estar vazio!'
    } 
} catch (erro) {
    console.log('Houve um erro', erro)
}
console.log('Boa noite!')