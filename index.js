function buttonListeners() {
    const buttons = document.getElementsByClassName("drum");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            const audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        });
    }
}

buttonListeners();
