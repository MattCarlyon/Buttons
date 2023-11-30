// pictures.js

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".pictures");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            playPictureSound(button);
        });
    });

    function playPictureSound(button) {
        var soundId = button.getAttribute("data-sound-id");
        var pictureSound = document.getElementById(soundId + "Sound");

        if (pictureSound) {
            pictureSound.pause();
            pictureSound.currentTime = 0;
            pictureSound.play();
        }
    }
});



