document.addEventListener('DOMContentLoaded', () => {
    const exercise1Button = document.getElementById('exercise1');
    const exercise2Button = document.getElementById('exercise2');
    const commandSection = document.getElementById('command-section');
    const sliderSection = document.getElementById('slider-section');
    const characterImage = document.getElementById('character-image');
    const yogaImage = document.getElementById('yoga-image');
    const imageSlider = document.getElementById('image-slider');

    function toggleActiveSection(activeButton, inactiveButton, activeSection, inactiveSection) {
        activeSection.classList.remove('hidden');
        inactiveSection.classList.add('hidden');
        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }

    exercise1Button.addEventListener('click', () => {
        toggleActiveSection(exercise1Button, exercise2Button, commandSection, sliderSection);
    });

    exercise2Button.addEventListener('click', () => {
        toggleActiveSection(exercise2Button, exercise1Button, sliderSection, commandSection);
        imageSlider.value = "1"; // Reset the slider to the first image
        yogaImage.src = 'images/yoga1.jpg'; // Reset the image to the first one in the sequence
    });

    document.addEventListener('keydown', (event) => {
        if (commandSection.classList.contains('hidden')) {
            // If Exercise 1 is not active, ignore keydown events
            return;
        }

        const commandKey = event.key.toLowerCase();
        function handleImageChange(imageSrc) {
            characterImage.src = imageSrc;
        }

        switch (commandKey) {
            case 'b':
                handleImageChange('images/read.jpg');
                break;
            case 'c':
                handleImageChange('images/clown.jpg');
                break;
            case 'p':
                handleImageChange('images/birthday.jpg');
                break;
            case 'r':
                handleImageChange('images/rain.jpg');
                break;
            case 's':
                handleImageChange('images/shovel.jpg');
                break;
            case 'w':
                handleImageChange('images/work.jpg');
                break;
            // Handle other keys if necessary
        }
    });

    // New event listener for the slider to change images
    imageSlider.addEventListener('input', (event) => {
        const sliderValue = event.target.value;
        yogaImage.src = `images/yoga${sliderValue}.jpg`; // Assumes images are named yoga1.jpg, yoga2.jpg, etc.
    });
});
