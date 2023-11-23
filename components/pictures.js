document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".pictures");
    var clickSound = document.getElementById("clickSound");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var soundId = button.getAttribute("data-sound-id");
            var animalSound = document.getElementById(soundId);

            if (animalSound) {
                clickSound.pause(); // Pause any currently playing sound
                clickSound.currentTime = 0; // Reset the audio to the beginning
                clickSound.src = animalSound.src;
                clickSound.play();
            }
        });
    });
});

