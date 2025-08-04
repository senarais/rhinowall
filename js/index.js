//Typed Effect
var typed = new Typed('#hero-p', {
      strings: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorem quisquam ad, corporis laboriosam voluptate earum delectus rem iure incidunt, sunt tenetur laborum exercitationem qui.'],
      typeSpeed: 0,
      showCursor: false,
      loop: true,
    });

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
    allowTouchMove: false
  });
} infiniteCarousel();

function togglePrice() {
  const button = document.querySelector('.button');
  const circle = document.querySelector('.button-circle');
  
  button.addEventListener('click', () => {
    circle.classList.toggle('toggle');
    button.classList.toggle('toggleBG');
  });
} togglePrice();