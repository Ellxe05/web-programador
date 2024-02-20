let video = document.getElementById('video1')

function voltar(){
    video.currentTime -= 15
}

function avancar(){
    video.currentTime += 15
}

function desacelerar(){
    video.playbackRate -= 0.1
}

function acelerar(){
    video.playbackRate += 0.1
}

function comecar(){
    video.play()
}

function parar(){
    video.pause()
}