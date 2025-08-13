AOS.init();

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

//Checkout
function toggleCheckout() {
  const audioOn = new Audio('/assets/audio/price-switch-on.mp3');
  audioOn.play();
  audioOn.volume = 0.5;
  document.querySelector('.checkout').classList.remove('hidden');
}
function removeCheckout() {
  const audioOn = new Audio('/assets/audio/price-switch-off.mp3');
  audioOn.play();
  audioOn.volume = 0.5;
  sessionStorage.setItem('savedCurrentItem', 0);
  document.querySelector('.checkout').classList.add('hidden');
}

document.querySelector('.checkout-container a').addEventListener('click', () => {
  const audioOn = new Audio('/assets/audio/price-switch-off.mp3');
  audioOn.play();
  audioOn.volume = 0.5;
  document.querySelector('.checkout').classList.add('hidden');
});

const closeCheckout = document.querySelector('.checkout i');
closeCheckout.addEventListener('click', removeCheckout);

//Checkout Data
function proTier() {
    const checkoutTier = document.getElementById('checkout-tier-h5');
    const checkoutCycle = document.getElementById('checkout-cycle-p');
    const checkoutSubtotal = document.getElementById('checkout-subtotal-p');
    const checkout = document.querySelector('.checkout');

    checkoutTier.innerHTML = 'Pro Tier';
    if (toggleYear == 0) {
        checkoutCycle.innerHTML = 'Monthly';
        checkoutSubtotal.innerHTML = '$9';
    } else if (toggleYear == 1) {
        checkoutCycle.innerHTML = 'Yearly';
        checkoutSubtotal.innerHTML = '$99';
    }

    sessionStorage.setItem('savedCurrentItem', 1);
    checkout.classList.remove('hidden');

    const audioOn = new Audio('/assets/audio/price-switch-on.mp3');
    audioOn.volume = 0.5;
    audioOn.play();
}

function businessTier() {
    const checkoutTier = document.getElementById('checkout-tier-h5');
    const checkoutCycle = document.getElementById('checkout-cycle-p');
    const checkoutSubtotal = document.getElementById('checkout-subtotal-p');
    const checkout = document.querySelector('.checkout');

    checkoutTier.innerHTML = 'Business Tier';
    if (toggleYear == 0) {
        checkoutCycle.innerHTML = 'Monthly';
        checkoutSubtotal.innerHTML = '$29';
    } else if (toggleYear == 1) {
        checkoutCycle.innerHTML = 'Yearly';
        checkoutSubtotal.innerHTML = '$299';
    }

    sessionStorage.setItem('savedCurrentItem', 2);
    checkout.classList.remove('hidden');

    const audioOn = new Audio('/assets/audio/price-switch-on.mp3');
    audioOn.volume = 0.5;
    audioOn.play();
}


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

// Feedback Carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 20,
    nav: true,
    items: 1,
    stagePadding: 420,
    responsive:{
      0:{
        stagePadding: 150
      },
      768:{
        stagePadding: 300
      },
      1200:{
        stagePadding: 420
      }
    },
    mouseDrag: false,
    autoplay: true
  });
});