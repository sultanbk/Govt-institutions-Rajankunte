
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

// to select the class from the realted course 

document.getElementById('courseSelect').addEventListener('change', function() {
    var selectedClassDropdown = document.getElementById('selectedClass');
    selectedClassDropdown.innerHTML = ''; // clear existing options

    var selectedCourse = this.value;

    if (selectedCourse === 'Highschool') {
        // add options for high school
        var classes = ['8', '9', '10'];
        for (var i = 0; i < classes.length; i++) {
            var option = document.createElement('option');
            option.value = classes[i];
            option.text = classes[i];
            selectedClassDropdown.add(option);
        }
    }
    // add else if blocks here for other courses
});

//puc select class options 
document.getElementById('courseSelect').addEventListener('change', function() {
    var selectedClassDropdown = document.getElementById('selectedClass');
    selectedClassDropdown.innerHTML = ''; // clear existing options

    if (this.value === 'Highschool' || this.value === 'puc') {
        // Show the "Select Class" dropdown for Highschool and PUC
        selectedClassDropdown.style.display = 'block';

        // Add default option
        var defaultOption = document.createElement('option');
        defaultOption.text = 'Select Class';
        selectedClassDropdown.add(defaultOption);
    }
});

// primary school select class options
document.getElementById('courseSelect').addEventListener('change', function() {
    var selectedClassDropdown = document.getElementById('selectedClass');
    selectedClassDropdown.innerHTML = ''; // clear existing options

    // Add default option
    var defaultOption = document.createElement('option');
    defaultOption.text = 'Select Class';
    selectedClassDropdown.add(defaultOption);

    var selectedCourse = this.value;

    if (selectedCourse === 'Highschool') {
        // add options for high school
        var classes = ['8', '9', '10'];
        for (var i = 0; i < classes.length; i++) {
            var option = document.createElement('option');
            option.value = classes[i];
            option.text = classes[i];
            selectedClassDropdown.add(option);
        }
    } else if (selectedCourse === 'PrimarySchool') {
        // add options for primary school
        var classes = ['1', '2', '3', '4', '5', '6', '7'];
        for (var i = 0; i < classes.length; i++) {
            var option = document.createElement('option');
            option.value = classes[i];
            option.text = classes[i];
            selectedClassDropdown.add(option);
        }
    }
    // add else if blocks here for other courses
});

// for smooth transition 
var buttons = document.querySelectorAll('.btn_grp .btn');
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
      fetch('puc_tt.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('tableContainer').innerHTML = data;
      });
      fetch('high_school_tt.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('highSchoolTableContainer').innerHTML = data;
      });
      fetch('primary_school_tt.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('primarySchoolTableContainer').innerHTML = data;
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
