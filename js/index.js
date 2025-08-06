// Toggle SignUp
function toggleSignup() {
  const audioOn = new Audio('/assets/audio/price-switch-on.mp3');
  audioOn.play();
  audioOn.volume = 0.5;
  document.querySelector('.login').classList.add('hidden');
  document.querySelector('.signin').classList.remove('hidden');
}

function toggleLogin() {
  const audioOn = new Audio('/assets/audio/price-switch-on.mp3');
  audioOn.play();
  audioOn.volume = 0.5;
  document.querySelector('.signin').classList.add('hidden');
  document.querySelector('.login').classList.remove('hidden');
}

function removeSignup() {
  const audioOff = new Audio('/assets/audio/price-switch-off.mp3');
  audioOff.play();
  audioOff.volume = 0.5;
  document.querySelector('.signin').classList.add('hidden');
  document.querySelector('.login').classList.add('hidden');
}
const priceButton = document.querySelectorAll('.signin-button');
const closeSignup = document.querySelectorAll('.bx-x-circle');
const signUp = document.querySelector('.signin');

closeSignup.forEach(button => {
  button.addEventListener('click', removeSignup);
})

priceButton.forEach((button) => {
  button.addEventListener('click', toggleSignup);
});



// Validate Register Password
function handleSubmit() {
  const pw = document.getElementById("password").value;
  const cpw = document.getElementById("confirm-password").value;

  if (pw !== cpw) {
    alert("Passwords do not match.");
    return false; 
  }

  window.location.href = "index.html";

  return false;
}


//Typed Effect
var typed = new Typed('#hero-p', {
      strings: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorem quisquam ad, corporis laboriosam voluptate earum delectus rem iure incidunt, sunt tenetur laborum exercitationem qui.'],
      typeSpeed: 0,
      showCursor: false,
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
      const audioOn = new Audio('/assets/audio/price-switch-on.mp3');
      audioOn.play();
      audioOn.volume = 0.5;
      
      document.getElementById('price-free').innerHTML = "$0<span>/year</span>";
      document.getElementById('price-pro').innerHTML = "$99<span>/year</span>";
      document.getElementById('price-business').innerHTML = "$299<span>/year</span>";
      toggleYear = 1;
    } else if (toggleYear == 1) {
      const audioOff = new Audio('/assets/audio/price-switch-off.mp3');
      audioOff.play();
      audioOff.volume = 0.5;

      document.getElementById('price-free').innerHTML = "$0<span>/month</span>";
      document.getElementById('price-pro').innerHTML = "$9<span>/month</span>";
      document.getElementById('price-business').innerHTML = "$29<span>/month</span>";
      toggleYear = 0;
    }
  });
} togglePrice();