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