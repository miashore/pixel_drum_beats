function buttonListeners() {
    const buttons = document.getElementsByClassName("drum");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mousedown", function () {
            let sound = "sounds/";
            switch (this.innerText) {
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
                default:
                    sound += "snare.mp3";
            }
            this.classList.add("pressed");
            const audio = new Audio(sound);
            audio.play();
        });
        buttons[i].addEventListener("mouseup", function () {
            this.classList.remove("pressed");
        });
    }
}

buttonListeners();
