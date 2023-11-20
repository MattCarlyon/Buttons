document.addEventListener('DOMContentLoaded', function() {
    var soundButtons = document.querySelectorAll('.sound-btn');
    var audio = document.getElementById('clickSound');
    
    soundButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            playSound();
        });
    });

    function playSound() {
        audio.play();
    }
});
