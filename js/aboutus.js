// aboutus.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons and all content divs
    var buttons = document.querySelectorAll('.btn');
    var contents = document.querySelectorAll('.content');

    // Hide all content divs initially
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show default content (Vision & Mission)
    document.getElementById('visionMission').style.display = 'block';

    // Add a click event listener to each button
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // Hide all content divs
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show clicked content
            contents[index].style.display = 'block';
        });
    });
});