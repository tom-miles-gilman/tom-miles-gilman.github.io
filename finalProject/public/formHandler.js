document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const data = new FormData(form);
    const formFeedback = document.getElementById('formFeedback');

    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Success feedback
            formFeedback.innerHTML = "Thank you for your message. I will get back to you soon.";
            formFeedback.style.color = 'green';
            form.reset(); // Clear the form fields
        } else {
            // Error feedback if the submission was not successful
            formFeedback.innerHTML = "There was a problem with your submission. Please try again.";
            formFeedback.style.color = 'red';
        }
    })
    .catch(error => {
        // Error feedback for network errors or exceptions
        console.error('Submission error:', error);
        formFeedback.innerHTML = "An error occurred. Please try again later.";
        formFeedback.style.color = 'red';
    });

    // Clear the feedback message after 5 seconds
    setTimeout(() => {
        formFeedback.textContent = '';
    }, 5000);
});
