"use strict";

function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: 'Au Au',
    speak: speakGeneric
}
let cat = {
    sound: 'Miau',
    speak: speakGeneric
}
let person = {
    sound: 'Olá',
    speak: speakGeneric
}

dog.speak();
cat.speak();

let bindedFunction = speakGeneric.bind(person);
bindedFunction();