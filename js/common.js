// Function to set image source dynamically
function setImageSource(elementId, imagePath) {
  var element = document.getElementById(elementId);
  if (element) {
    element.src = imagePath;
  }
}

// Home Page images
setImageSource('aboutUsImage', 'images/slide2.jpg');


// about section image
setImageSource('srVishwanath', 'images/collage comitee members/member1.jpg')

// blog images 
setImageSource('blog1','images/puc_staff.jpg')