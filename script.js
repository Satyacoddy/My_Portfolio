// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // For now, just log the form data (replace with a real email service or backend handling later)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    alert('Thank you for reaching out! I will get back to you soon.');

    // Reset the form
    event.target.reset();
});

// Handle click events on social media links
document.getElementById('linkedin-link').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/your-linkedin-username', '_blank');
});

document.getElementById('instagram-link').addEventListener('click', function() {
    window.open('https://www.instagram.com/your-instagram-username', '_blank');
});

document.getElementById('github-link').addEventListener('click', function() {
    window.open('https://github.com/your-github-username', '_blank');
});




  