document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".pictures");
    var clickSound = document.getElementById("clickSound");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            playPictureSound(button);
        });
    });

    function playPictureSound(button) {
        var soundId = button.getAttribute("data-sound-id");
        var pictureSound = document.getElementById(soundId + "Sound");

        if (pictureSound) {
            clickSound.pause();
            clickSound.currentTime = 0;
            clickSound.src = pictureSound.src;
            clickSound.play();
        }
    }
});



