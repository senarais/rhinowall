// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


function infiniteCarousel () {
  var swiper = new Swiper('.swiper', {
    loop: true,
    speed: 8000,
    autoplay: {
      delay: 0,         // no delay between slides
      disableOnInteraction: false
    },
    grabCursor: false,
    slidesPerView: 'auto',
    stopOnLastSlide: false,
    spaceBetween: -50,
  });
}

infiniteCarousel();

