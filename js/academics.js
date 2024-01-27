
document.querySelectorAll('.btn_grp .btn').forEach(function(button) {
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



/*
document.querySelector('.btn[data-target="TIMETABLE"]').addEventListener('click', function() {
    // Hide all tables
    var tables = document.querySelectorAll('.table-responsive');
    for (var i = 1; i < tables.length; i++) {
        tables[i].style.display = 'none';
    }

    var selectedDay = this.options[this.selectedIndex].getAttribute('data-target');
    document.getElementById(selectedDay).style.display = 'block';
});*/





document.getElementById('selectDay').addEventListener('change', updateTable);
document.getElementById('courseSelect').addEventListener('change', updateTable);

function updateTable() {
    // Hide all tables
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.display = 'none';
    }

    // Show the selected course's table for the selected day
    var selectedDay = document.getElementById('selectDay').value;
    var selectedCourse = document.getElementById('courseSelect').value;
    if (selectedDay && selectedCourse) {
        var table = document.querySelector('table[data-target="' + selectedCourse + '_' + selectedDay + '"]');
        if (table) {
            table.style.display = 'block';
        }

        // Update the download link
        document.getElementById('downloadLink').href = 'files/' + selectedCourse + 'TT.pdf';
    }
}

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