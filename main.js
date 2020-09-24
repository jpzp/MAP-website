// Re writting the slider, expand and vidpopup.js into one file
// slider
let sliderFactory = () => {
// All slider controls and listener in here
  let slideIndex = 1;

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
    timer.reset();
  }

  //Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
    timer.reset();
  }

  // Displays slide "n";
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length)  {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display= "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Dot Click control
  let dotsArr = document.querySelectorAll('.dot');
  for(i = 0; i < 9; i++){
    let temp = dotsArr[i];
    temp.addEventListener('click', () => {
      currentSlide(parseInt(temp.id));
    });
  }

  /* Arrow Click Control */
  let leftArw = document.querySelector('.prev');
  leftArw.addEventListener('click', () => plusSlides(-1));

  let rightArw = document.querySelector('.next');
  rightArw.addEventListener('click', () => plusSlides(1));


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
  return { showSlides, currentSlide }
};

let slide = sliderFactory();
slide.showSlides(1);

// Responsive Navbar expansion 
function expand() {
  var x = document.getElementById("nav");
  if (x.className === "nav icon") {
    x.className += " responsive";
  } else {
    x.className = "nav icon";
  }
}

// Video Popup
// Video popup code
const overlay = document.querySelector('#overlay');
const closeOverlay = document.querySelector('#close-overlay');
// Make popup work for one card then generalize to all of them

//Array of links to videos
const vidLinks = { "crazy-car":"https://www.youtube.com/embed/3N1oi_833kk?rel=0",
                  "i-think-im-gay":"",
                  "theo-and-casey":"",
                  "way-of-the-wolf":"https://www.youtube.com/embed/wI1EAh0rtxQ?rel=0",
                  "in-my-life":"https://www.youtube.com/embed/WTc16fR73M4?rel=0",
                  "not-that-girl":"https://www.youtube.com/embed/OLgWshU0n4A?rel=0",
                  "biographers-wife":"",
                  "wonder-buffalo":"https://player.vimeo.com/video/223066243",
                  "con":"https://www.youtube.com/embed/mBIGc2c5MAM?rel=0"
                };

// onClick grey div and iframe video;
// x in top corner (create and style div, make visible, then just add iframe ontop in here?)
closeOverlay.addEventListener('click', ()=>{
  overlay.removeChild(overlay.lastElementChild);
  overlay.style.display = "none";
});

const workAreaCards = document.querySelectorAll(".img");
workAreaCards.forEach(card => {card.addEventListener("click", () => {videoOnClick(card.parentNode.id)} )} );

function videoOnClick(cardId){
  if (vidLinks[cardId] === ""){
    return alert("Video not available at the moment");
  }
  overlay.style.display = "block";
  const frame = document.createElement('iframe');
  frame.src= vidLinks[cardId];
  frame.width= "720";
  frame.height="405";
  frame.frameBorder="0";
  frame.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  frame.allowFullscreen = true;
  overlay.appendChild(frame);
}



