// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.getElementById('main-content');

    // Set a timeout for the intro animation
    setTimeout(() => {
        // Fade out the intro
        intro.style.opacity = '0';

        // After the fade out, hide the intro and show the main content
        setTimeout(() => {
            intro.classList.add('hidden'); // Hide the intro
            mainHeader.classList.remove('hidden'); // Show the main header
            mainContent.classList.remove('hidden'); // Show the main content

            // Fade in the main header and content
            mainHeader.style.opacity = '1';
            mainContent.style.opacity = '1';
        }, 1000); // Match this duration with the CSS transition duration
    }, 3000); // Duration for how long the intro is displayed (3 seconds)
});

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll behavior
        });
    });
});

