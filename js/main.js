
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