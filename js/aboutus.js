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

// JavaScript for smooth transition
var buttons = document.querySelectorAll('.abt-btnGroup .btn');
var contents = document.querySelectorAll('.content');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var target = this.getAttribute('data-section');

        contents.forEach(function(content) {
            if (content.id === target) {
                content.style.opacity = 0;
                setTimeout(function() {
                    content.style.display = 'block';
                    setTimeout(function() {
                        content.style.opacity = 1;
                    }, 50);
                }, 200);
            } else {
                content.style.opacity = 0;
                setTimeout(function() {
                    content.style.display = 'none';
                }, 200);
            }
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
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('footer').innerHTML = data;
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