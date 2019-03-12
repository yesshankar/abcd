
let display = document.getElementById('display');
let sound = document.getElementById('sound');

document.querySelector('body').onkeypress = function(event) {
    let alphanumeric = new RegExp("\\w");
    let char = String.fromCharCode(event.which);
    char = char.toLowerCase();

    if(alphanumeric.test(char)){
        sound.setAttribute('src', `sounds/${char}.mp3`);
    }else{
        sound.setAttribute('src', `sounds/Crash.mp3`);
    }

    display.innerText = char.toUpperCase();
    sound.play();
};