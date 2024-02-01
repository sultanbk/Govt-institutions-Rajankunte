document.querySelectorAll('.left1_btn .btn').forEach(function(button) {
    button.addEventListener('click', function() {
        // Hide all content divs
        document.querySelectorAll('.content').forEach(function(content) {
            content.style.display = 'none';
        });

        // Show the content div that corresponds to the clicked button
        var sectionId = button.getAttribute('data-target').toUpperCase();
        var section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        } else {
            console.log('No section found with id:', sectionId);
        }
    });
});

// for smooth transition 
var buttons = document.querySelectorAll('.left1_btn .btn');
var contents = document.querySelectorAll('.content');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var target = this.getAttribute('data-target');

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


// to load the navbar and other common html 
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


    // Listen for the hashchange event
    window.addEventListener('hashchange', function() {
        // Get the new hash
        var hash = window.location.hash;

        // Remove the '#' from the hash
        var id = hash.substring(1);

        // Get the button that corresponds to the new hash
        var button = document.querySelector('button[data-target="' + id + '"]');

        // If the button exists, simulate a click on it
        if (button) {
            button.click();
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('hashchange', function() {
        var hash = window.location.hash;
        var id = hash.substring(1);
        var button = document.querySelector('button[data-target="' + id + '"]');

        if (button) {
            button.click();
        } else {
            // If the button doesn't exist on the current page, navigate to the 'academics.html' page
            window.location.href = 'academics.html' + hash;
        }
    });

    // If there's a hash in the URL when the page loads, simulate a click on the corresponding button
    var hash = window.location.hash;
    var id = hash.substring(1);
    var button = document.querySelector('button[data-target="' + id + '"]');
    if (button) {
        button.click();
    }
});

function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}
