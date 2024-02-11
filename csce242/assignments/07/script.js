// When the DOM is fully loaded, the enclosed functions will be ready to execute
document.addEventListener('DOMContentLoaded', () => {
  const exercise1Button = document.getElementById('exercise1');
  const exercise2Button = document.getElementById('exercise2');
  const commandSection = document.getElementById('command-section');
  const sliderSection = document.getElementById('slider-section');
  const characterImage = document.getElementById('character-image');
  const commandInput = document.getElementById('command-input'); // Assuming you have an input with this id

  // Function to toggle visibility of sections and update active button state
  function toggleActiveSection(activeButton, inactiveButton, activeSection, inactiveSection) {
    activeSection.classList.remove('hidden');
    inactiveSection.classList.add('hidden');
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
  }

  // Event listeners for the exercise buttons
  exercise1Button.addEventListener('click', () => {
    toggleActiveSection(exercise1Button, exercise2Button, commandSection, sliderSection);
    commandInput.focus(); // Automatically focus on the input field when Exercise 1 is selected
  });

  exercise2Button.addEventListener('click', () => {
    toggleActiveSection(exercise2Button, exercise1Button, sliderSection, commandSection);
  });

  // Function to change the character image based on command
  function changeCharacterImage(command) {
    if (command === 'b') {
      characterImage.src = 'path_to_book_image.png';
    } else if (command === 'c') {
      characterImage.src = 'path_to_clown_image.png';
    } else if (command === 'p') {
      characterImage.src = 'path_to_party_image.png';
    } else if (command === 'r') {
      characterImage.src = 'path_to_rain_image.png';
    } else if (command === 's') {
      characterImage.src = 'path_to_shovel_image.png';
    } else if (command === 'w') {
      characterImage.src = 'path_to_work_image.png';
    }
  }

  // Event listener for input on the command text box
  commandInput.addEventListener('input', (event) => {
    const command = event.target.value.toLowerCase(); // Get the current value of the input field
    event.target.value = ''; // Clear the input field after getting the value

    // Change the image based on the entered command
    changeCharacterImage(command);
  });
});
