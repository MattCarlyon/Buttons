document.addEventListener('DOMContentLoaded', function() {
    var soundButtons = document.querySelectorAll('.sound-btn');
    
    soundButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            playSound();
        });
    });

    function playSound() {
        var audio = new Audio(sounds/click.mp3); // Adjust the path as needed
        audio.play();
    }
});


