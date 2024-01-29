// common.js

  function submitForm(event, formId) {
    event.preventDefault();
    var form = document.getElementById(formId);
    var formData = new FormData(form);

    var sheetId = 'YOUR_GOOGLE_SHEET_ID'; // Replace with your Google Sheet ID
    var url = 'https://script.google.com/macros/s/AKfycbzC4zVKxB9HQ3T5avQNXBDU1ijBwHMbRBk9wgP96NcM93FEGPSFz4FBC_-Z0FD-JTj3zw/exec';

    fetch(url + '?sheetId=' + sheetId, {
      method: 'POST',
      body: formData,
    })
    .then(function(response) {
      if (response.ok) {
        document.getElementById(formId + 'SubmissionMessage').style.display = 'block';
      } else {
        console.error('Error: ' + response.status);
      }
    })
    .catch(function(error) {
      console.error('There has been a problem with your fetch operation:', error);
    });

    form.reset();
  }

function loadContent(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    });
}

$(document).ready(function() {
  loadContent('head.html', 'headContent');
  loadContent('navbar.html', 'navbar');
  loadContent('footer.html', 'footer');
});