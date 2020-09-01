// Video popup code
const overlay = document.querySelector('#overlay');

// Make popup work for one card then generalize to all of them
const crazyCar = document.querySelector('#crazy-car-img');

// onClick grey div and iframe video;
// x in top corner (create and style div, make visible, then just add iframe ontop in here?)
crazyCar.addEventListener('click', ()=>{
  overlay.style.display = "block";
  /*
  const frame = document.createElement('iframe');
  frame.src= "https://www.youtube.com/embed/3N1oi_833kk";
  frame.
  */
})