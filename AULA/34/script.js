let usuarios = ['Gabrielle', 'Graziele', 'Janaina'];

function inserirUsuario(nome) {
    let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        usuarios.push(nome)
        let error = false
        
        if (!error) {
            resolve()
        } else {
            reject({msg: 'Error!!!'})
        }
    }, 1000)
})
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}
inserirUsuario('Bruna').then(listarUsuarios).catch((error) => {
    console.log(error)
})