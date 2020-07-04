function addButtonListeners() {
    const buttons = document.getElementsByClassName("drum");
    document.addEventListener("keydown", playSound);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mousedown", playSound);
        buttons[i].addEventListener("mouseup", removePressedClass);
    }
    document.addEventListener("keyup", removePressedClass);
}

function playSound(event) {
    const pressedLetter = getLetter(event);
    const sound = getSound(pressedLetter);
    if (sound !== null) {
        addPressedClass(event);
        const audio = new Audio(sound);
        audio.play();
    }
}

function getLetter(mouseOrKeyEvent) {
    if (mouseOrKeyEvent.type === "mousedown") {
        return mouseOrKeyEvent.target.innerText;
    }
    return (pressedLetter = mouseOrKeyEvent.key);
}

function getSound(key) {
    let sound = "sounds/";
    switch (key) {
        case "w":
            sound += "tom-1.mp3";
            break;
        case "a":
            sound += "tom-2.mp3";
            break;
        case "s":
            sound += "tom-3.mp3";
            break;
        case "d":
            sound += "tom-4.mp3";
            break;
        case "j":
            sound += "crash.mp3";
            break;
        case "k":
            sound += "kick-bass.mp3";
            break;
        case "l":
            sound += "snare.mp3";
            break;
        default:
            console.log(key + " can't play.");
            sound = null;
    }
    return sound;
}

function addPressedClass(mouseOrKeyEvent) {
    const pressedLetter = getLetter(mouseOrKeyEvent);
    if (mouseOrKeyEvent.type === "keydown") {
        const activeButton = document.querySelector("." + pressedLetter);
        activeButton.classList.add("pressed");
    } else {
        mouseOrKeyEvent.target.classList.add("pressed");
    }
}

function removePressedClass(mouseOrKeyEvent) {
    if (mouseOrKeyEvent.type === "keyup") {
        const activeButton = document.querySelector("." + mouseOrKeyEvent.key);
        if (activeButton) {
            activeButton.classList.remove("pressed");
        }
    } else {
        this.classList.remove("pressed");
    }
}

addButtonListeners();
