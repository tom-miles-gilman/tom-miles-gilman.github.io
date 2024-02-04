document.getElementById('placeholderImage').addEventListener('click', function() {
    var img = document.getElementById('placeholderImage');
    if (img.src.includes("200x200?text=Click+Me")) {
      img.src = "https://via.placeholder.com/200x200?text=Changed";
    } else {
      img.src = "https://via.placeholder.com/200x200?text=Click+Me";
    }
  });
  
  document.getElementById('imageSlider').addEventListener('input', function() {
    var angle = document.getElementById('imageSlider').value;
    var img = document.getElementById('rotatingImage');
    img.style.transform = `rotate(${angle}deg)`;
  });
  
  document.getElementById('starContainer').addEventListener('click', function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    
    var star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '★'; // Using a star character
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.position = 'absolute';
    star.style.fontSize = '24px'; // Size of the star
    
    this.appendChild(star);
  });
  