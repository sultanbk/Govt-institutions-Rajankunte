// common.js

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