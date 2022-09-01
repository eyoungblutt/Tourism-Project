
const buttons = document.querySelectorAll("[data-carousel-button]")


buttons.forEach(button => {
button.addEventListener("click", () => {
  const offset = button.dataset.carouselButton === "next"? 1 : -1;
  const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset
  if(newIndex < 0) newIndex = slides.children.length -1
  if( newIndex >= slides.children.length) newIndex = 0

  slides.children[newIndex].dataset.active =true
  delete activeSlide.dataset.active
})
})

// const images = ["Breakwall-800x600.jpg", "Port-Macquarie-Camel-Safari-by-Lindsay-Moller-Productions.jpg", "por-macquarie-nsw.jpg"];
// images.className = "images";
// const carousel = document.querySelector(".carousel");
// const interval = setInterval(function(){
//   startCarousel();
// }, 3000);
// var index = 1;

// startCarousel = ()=>{
//   carousel.style.backgroundImage = `url(${images[index++]})`
//   if(index > images.length -1) index = 0;
// }