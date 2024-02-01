
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


$('[data-fancybox="gallery"]').fancybox({
  buttons : [ 
      'close'
  ],
  loop: false,
  infobar: false,
  smallBtn: true,
  toolbar: false,
  touch: {
      vertical: false,  // Allow to drag content vertically
      momentum: false   // Continue movement after releasing mouse/touch when panning
  }
});