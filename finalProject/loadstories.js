document.getElementById('storyForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the form data
    const storyTitle = document.getElementById('storyTitle').value;
    const storyImg = document.getElementById('storyImg').value;
    const storyText = document.getElementById('storyText').value;

    // Create the story article
    const article = document.createElement('article');
    article.classList.add('story');

    // Add the story content
    article.innerHTML = `
        <h2>${storyTitle}</h2>
        <div class="story-content">
            <img src="photos/${storyImg}" alt="Story Image" class="story-image">
            <p>${storyText}</p>
        </div>
        <p class="author">Submitted by a visitor</p>
    `;

    // Append the new story to the main content
    const mainContent = document.querySelector('.content');
    mainContent.appendChild(article);

    // Optional: Clear the form fields after submission
    document.getElementById('storyForm').reset();
});
