document.addEventListener('DOMContentLoaded', function () {
    var soundButtons = document.querySelectorAll('.sound-btn');
    var clickSound = document.getElementById('clickSound');

    soundButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            playSoundForButton(button);
        });
    });

    function playSoundForButton(button) {
        var soundPath = button.getAttribute('data-sound-path');

        if (soundPath) {
            clickSound.pause();
            clickSound.currentTime = 0;
            clickSound.src = soundPath;
            clickSound.play();
        } else {
            console.error('Missing data-sound-path attribute on the sound button.');
        }
    }
});

