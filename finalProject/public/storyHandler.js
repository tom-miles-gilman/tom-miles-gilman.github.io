// Handle the story form submission
document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const storyData = {
        title: document.getElementById('storyTitle').value,
        img_name: document.getElementById('storyImg').value,
        text: document.getElementById('storyText').value,
        // Add other fields here as necessary
    };

    // Post the story to the server
    fetch('/api/stories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(storyData)
    })
    .then(response => response.json())
    .then(addedStory => {
        console.log('Story added:', addedStory);
        displayStories(); // Refresh the stories list
    })
    .catch(error => console.error('Error:', error));
});

// Function to display stories on the page
function displayStories() {
    fetch('/api/stories')
    .then(response => response.json())
    .then(stories => {
        const storiesList = document.getElementById('storiesList'); // Make sure  have this ID in your HTML
        storiesList.innerHTML = ''; // Clear current stories
        
        stories.forEach(story => {
            const storyElement = document.createElement('div');
            storyElement.innerHTML = `
                <h3>${story.title}</h3>
                <img src="${story.img_name}" alt="${story.title}">
                <p>${story.text}</p>
                <button onclick="editStory('${story._id}')">Edit</button>
                <button onclick="deleteStory('${story._id}')">Delete</button>
            `;
            storiesList.appendChild(storyElement);
        });
    })
    .catch(error => console.error('Error:', error));
}

// Function to delete a story
function deleteStory(storyId) {
    fetch(`/api/stories/${storyId}`, {
        method: 'DELETE'
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(() => {
        console.log('Story deleted');
        displayStories(); // Refresh the stories list
    })
    .catch(error => console.error('Error:', error));
}

// Function to edit a story
function editStory(storyId) {
    // Retrieve the story data from the page or a form
    // This example assumes you have a form or fields to edit a story's content
    const storyData = {
        title: document.getElementById('editStoryTitle').value,
        img_name: document.getElementById('editStoryImg').value,
        text: document.getElementById('editStoryText').value,
        // Add other fields here as necessary
    };

    fetch(`/api/stories/${storyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(storyData)
    })
    .then(response => response.json())
    .then(updatedStory => {
        console.log('Story updated:', updatedStory);
        displayStories(); // Refresh the stories list
    })
    .catch(error => console.error('Error:', error));
}

// Call displayStories on page load
document.addEventListener('DOMContentLoaded', displayStories);
