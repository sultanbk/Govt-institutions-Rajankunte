// Function to set image source dynamically
function setImageSource(elementId, imagePath) {
  var element = document.getElementById(elementId);
  if (element) {
    element.src = imagePath;
  }
}

// Home Page Slide Show Use 1920x800px (12:5 ratio) Images Here for Better Results
setImageSource('first-slide', 'images/slide show/slide1.jpg')
setImageSource('second-slide', 'images/slide show/slide2.jpg')
setImageSource('third-slide', 'images/slide show/slide3.jpg')
setImageSource('fourth-slide', 'images/slide show/slide4.jpg')

// Home Page images
setImageSource('aboutUsImage', 'images/slide2.jpg');

setImageSource('photo-card1','images/IMG-20240125-WA0129.jpg')
setImageSource('photo-card2','images/IMG-20240125-WA0156.jpg')
setImageSource('photo-card3','images/IMG-20240125-WA0164.jpg')
setImageSource('photo-card4','images/IMG-20240125-WA0119.jpg')


// about section image
setImageSource('srVishwanath', 'images/collage comitee members/member1.jpg')

// blog images 


setImageSource('blog1','images/puc_staff.jpg')

// facilities images

setImageSource('classroom','images/facilities/classroom.jpg')
setImageSource('library','images/facilities/library.jpg') 
setImageSource('smartroom','images/facilities/samrtclass.jpg')
setImageSource('computer_lab','images/facilities/computer_lab.jpg')
setImageSource('physicslab','images/facilities/physicslab.jpg')
setImageSource('chemistrylab','images/facilities/chemistrylab.jpg')
setImageSource('biologylab','images/facilities/biologylab.jpg')

setImageSource('swimmingPool','images/facilities/swimmingpool.jpg')
setImageSource('ground','images/facilities/ground.jpg')
setImageSource('badminton_court','images/facilities/badminton_court.jpg')
setImageSource('food','images/facilities/food.jpg')
setImageSource('auditorium','images/facilities/auditorium.jpg')



