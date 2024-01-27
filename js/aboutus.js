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
            var section = document.getElementById(button.dataset.section);
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show clicked content
            contents[index].style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

window.onload = function() {
  fetch('head.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('headContent').innerHTML += data;
    });

  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });
};

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('hashchange', function() {
    var hash = window.location.hash;
    var section = hash.substring(1);
    simulateButtonClick(section);
  });

  // If there's a hash in the URL when the page loads, simulate a click on the corresponding button
  var hash = window.location.hash;
  var section = hash.substring(1);
  simulateButtonClick(section);
});

function simulateButtonClick(section) {
  var button = document.querySelector('button[data-section="' + section + '"]');
  console.log('Trying to click button:', button);
  if (button) {
    button.click();
  }
}