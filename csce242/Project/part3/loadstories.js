document.addEventListener('DOMContentLoaded', function() {
    fetch('stories.json')
    .then(response => response.json())
    .then(data => displayStories(data))
    .catch(error => console.error('Error loading stories:', error));
});

function displayStories(stories) {
    const content = document.querySelector('.content');
    stories.forEach(story => {
        const article = document.createElement('article');
        article.className = 'story';
        article.innerHTML = `
            <h2>${story.title}</h2>
            <div class="story-content">
                <img src="${story.img_name}" alt="Story Image" class="story-image">
                <p>${story.text}</p>
            </div>
            <p class="author">${story.author} - ${story.date}</p>
        `;
        content.appendChild(article);
    });
}
