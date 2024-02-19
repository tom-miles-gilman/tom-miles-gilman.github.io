// Bounce Ball setup
const ball = document.querySelector('.ball');
const startStopButton = document.getElementById('startStop');
let intervalId;
let direction = 'down';
let position = 0;

// Start/Stop Bounce Ball Event Listener
startStopButton.addEventListener('click', function(e) {
  e.preventDefault();
  if (startStopButton.textContent === 'start') {
    startStopButton.textContent = 'Stop';
    intervalId = setInterval(moveBall, 10);
  } else {
    startStopButton.textContent = 'start';
    clearInterval(intervalId);
  }
});

// Function to move the ball
function moveBall() {
  const ballContainerHeight = document.querySelector('.ball-container').clientHeight;
  const ballHeight = ball.clientHeight;
  const maxBottom = ballContainerHeight - ballHeight;
  
  if (direction === 'down') {
    if (position < maxBottom) {
      position++;
      ball.style.top = `${position}px`;
    } else {
      direction = 'up';
    }
  } else if (direction === 'up') {
    if (position > 0) {
      position--;
      ball.style.top = `${position}px`;
    } else {
      direction = 'down';
    }
  }
}

// Yoga Moves setup
const yogaMoves = [
  { image: 'images/yoga1.jpg', description: 'Triangle' },
  { image: 'images/yoga2.jpg', description: 'Downward Dog' },
  { image: 'images/yoga3.jpg', description: 'Tree Pose' },
  { image: 'images/yoga4.jpg', description: 'Cobra Pose' },
  { image: 'images/yoga5.jpg', description: 'Warrior II' },
  { image: 'images/yoga6.jpg', description: 'Extended Triangle Pose' },
  { image: 'images/yoga7.jpg', description: 'Warrior I' },
  { image: 'images/yoga8.jpg', description: 'High Lunge' }
];

// Function to handle clicking on a yoga image
function handleYogaClick(imageElement, description) {
  // Hide any previous description
  document.querySelectorAll('.yoga-image + .description').forEach(desc => {
    desc.remove();
  });

  // Create the description div and add it next to the image clicked
  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'description';
  descriptionDiv.textContent = description;
  imageElement.parentNode.insertBefore(descriptionDiv, imageElement.nextSibling);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const yogaContainer = document.querySelector('.yoga-container');
  yogaMoves.forEach((move, index) => {
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'yoga-image-wrapper';
    
    const img = document.createElement('img');
    img.src = move.image;
    img.alt = `Yoga move ${index + 1}`;
    img.classList.add('yoga-image');

    imgWrapper.appendChild(img);
    yogaContainer.appendChild(imgWrapper);
  
    // Attaches the event listener to the image
    img.addEventListener('click', function() {
      handleYogaClick(imgWrapper, move.description);
    });
  });
});
