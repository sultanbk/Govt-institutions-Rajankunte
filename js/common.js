// Function to set image source dynamically
function setImageSource(elementId, imagePath) {
  var element = document.getElementById(elementId);
  if (element) {
    element.src = imagePath;
  }
}

// Set image for the About Us section
setImageSource('aboutUsImage', 'images/slide2.jpg');


// about section images 
setImageSource('srVishwanath', 'images/collage comitee members/member1.jpg')