// Function to set image source dynamically
function setImageSource(elementId, imagePath) {
  var element = document.getElementById(elementId);
  if (element) {
    element.src = imagePath;
  }
}

// Home Page Slide Show 
setImageSource('first-slide', 'images/slide show/slide1.jpg')
setImageSource('second-slide', 'images/slide show/slide2.jpg')
setImageSource('third-slide', 'images/slide show/slide3.jpg')
setImageSource('fourth-slide', 'images/slide show/slide4.jpg')

// Home Page images
setImageSource('aboutUsImage', 'images/slide2.jpg');


// about section image
setImageSource('srVishwanath', 'images/collage comitee members/member1.jpg')

// blog images 
setImageSource('blog1','images/puc_staff.jpg')