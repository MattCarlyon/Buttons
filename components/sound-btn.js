// sound-btn.js

function speakText(text, rate, lang) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(text);

    // Set the rate to the provided value (or use a default value)
    utterance.rate = rate || 1.0;

    // Select a voice with the specified language
    var voices = synth.getVoices();
    var selectedVoice = voices.find(function (voice) {
        return voice.lang.startsWith(lang); // Match the language code
    });

    // Set the selected voice
    utterance.voice = selectedVoice;

    synth.speak(utterance);
}

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to all buttons with class "sound-btn"
    var soundBtns = document.querySelectorAll(".sound-btn");

    soundBtns.forEach(function (soundBtn) {
        soundBtn.addEventListener("click", function () {
            // Extract the data-sound-path attribute from the clicked button
            var soundPath = soundBtn.getAttribute("data-sound-path");

            // Get the name of the family member from the button's text content
            var thingName = soundBtn.textContent.trim();

            // Get the language code from the button's data-lang attribute
            var lang = soundBtn.getAttribute("data-lang");

            // Customize the text to speak based on the family member name
            var textToSpeak = thingName;

            // Concatenate the soundPath to the text if needed
            var fullPath = soundPath + textToSpeak;

            // Call the speakText function with the concatenated text, rate, and language code
            speakText(fullPath, 0.75, lang);
        });
    });
});
