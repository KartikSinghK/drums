var sound;
function playSound(key){
    switch (key) {
        case 'a':
        sound = new Audio("sounds/Floor-Tom.mp3");
        sound.play();
        break;

        case 's':
        sound = new Audio("sounds/clap.wav");        
        sound.play();
        break;

        case 'd':
        sound = new Audio("sounds/deep-kick.wav");
        sound.play();
        break;

        case 'f':
        sound = new Audio("sounds/Floor-Tom.mp3");
        sound.play();
        break;

        case 'g':
        sound = new Audio("sounds/hi-hat-01.wav");
        sound.play();
        break;

        case 'h':
        sound = new Audio("sounds/open-hat.wav");
        sound.play();
        break;

        case 'j':
        sound = new Audio("sounds/Snare.mp3");
        sound.play();
        break;

        case 'k':
        sound = new Audio("sounds/ride.wav");
        sound.play();
        break;

        case 'l':
        sound = new Audio("sounds/tink.wav");
        sound.play();
        break;
    }
}
window.addEventListener("keydown", function(event){
    playSound(event.key);
    document.getElementById(event.key).classList.add("yellowBorder");
});
window.addEventListener("keyup", function(){
    document.getElementById(event.key).classList.remove("yellowBorder");
});
