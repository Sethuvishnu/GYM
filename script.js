$('.button').click(function(){
  var buttonId = $(this).attr('id');
  console.log(buttonId)
  $('#modal-container').removeAttr('class').addClass('seven');
   $('.button2').css('z-index', 2);
  
})

$('.button2').click(function(){
  
  $('#modal-container').addClass('out');
   $('.button2').css('z-index', 0);

});

const locationEl = document.querySelector('.location');
const img = new Image();
img.src = "image/tnnnn.png";
img.onload = () => {
  locationEl.classList.add('loaded');
};





document.addEventListener("DOMContentLoaded",()=>{
  let tl=gsap.timeline({
    scrollTrigger:{
      trigger:".first-image",
      pin:true,
      start:"top centre ",
      end:'+='+window.innerHeight,
      scrub:0.4,
    }
    
  })
  
  tl.to(".first-image",{
    yPercent:10,
    
    width: 1000, // End height
    borderRadius:20,
    
    height:750,
    duration: 2, // Duration of the animation
    ease: "power1.inOut" ,  
  })
})


function Marquee(selector, speed) {
  const parent = document.querySelector(selector);
  const clone = parent.innerHTML;
  let i = 0;
  parent.innerHTML += clone;

  setInterval(() => {
    i += speed;
    if (i >= parent.children[0].clientWidth) i = 0;
    parent.children[0].style.marginLeft = `-${i}px`;
  }, 0);
}

window.addEventListener('load', () => Marquee('.infinite',2));

//--------------------------------------------------------

const scrollers = document.querySelectorAll(".result");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".result-list");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


//------------------------------------------------------------------------

