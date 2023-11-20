document.addEventListener('DOMContentLoaded', function() {
    var soundButtons = document.querySelectorAll('.index-btn');
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
