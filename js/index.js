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

// Company slider effect
function infiniteCarousel () {
  var swiper = new Swiper('.swiper', {
    loop: true,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    grabCursor: false,
    slidesPerView: 'auto',
    stopOnLastSlide: false,
    spaceBetween: -50,
    allowTouchMove: false
  });
} infiniteCarousel();


var toggleYear = 0;
function togglePrice() {
  const button = document.querySelector('.button');
  const circle = document.querySelector('.button-circle');
  
  button.addEventListener('click', () => {
    circle.classList.toggle('toggle');
    button.classList.toggle('toggleBG');

    

    if (toggleYear == 0) {
      document.getElementById('price-free').innerHTML = "$0<span>/year</span>";
      document.getElementById('price-pro').innerHTML = "$99<span>/year</span>";
      document.getElementById('price-business').innerHTML = "$299<span>/year</span>";
      toggleYear = 1;
    } else if (toggleYear == 1) {
      document.getElementById('price-free').innerHTML = "$0<span>/month</span>";
      document.getElementById('price-pro').innerHTML = "$9<span>/month</span>";
      document.getElementById('price-business').innerHTML = "$29<span>/month</span>";
      toggleYear = 0;
    }


  });
} togglePrice();