var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  timer.reset();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  timer.reset();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Timer
function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.stop = function() {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  }

  //start timer with curr settings
  this.start = function() {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }
    return this;
  }
  this.reset = function() {
    return this.stop().start();
  }
}

var timer = new Timer(function() {
  plusSlides(1);
}, 5000);

document.onkeydown = checkKey;
//Add arrow navigation 
function checkKey(e) {
  
  e = e || window.event;

  if (e.keyCode == '37') {
    // left arrow
    plusSlides(-1); 
    timer.reset();
  }
  else if (e.keyCode == '39') {
    // right arrow
    plusSlides(1);
    timer.reset();
  }
}