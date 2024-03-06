let usuarios = ['Gabrielle', 'Graziele', 'Janaina'];

function inserirUsuario(nome, callback) {
    setTimeout( () => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsuarios() {
    console.log(usuarios)
}

inserirUsuario('Bruna', listarUsuarios)