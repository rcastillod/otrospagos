/* ----------- Nav trigger ---------- */
const navTriggerOpen = document.getElementById('navTrigger')
const navTriggerClose = document.getElementById('closeTrigger')
const mobilePanel = document.getElementById('mobileNav')
const mobilePanelOverlay = document.querySelector('.overlay')

const activeMenuPanel = () => {
  navTrigger.classList.add('is-active')
  navTrigger.setAttribute('aria-expanded', 'true')
  mobilePanel.classList.add('is-open')
  mobilePanelOverlay.classList.add('is-open')
}

const deactivateMenuPanel = () => {
  navTrigger.classList.remove('is-active')
  navTrigger.setAttribute('aria-expanded', 'false')
  mobilePanel.classList.remove('is-open')
  mobilePanelOverlay.classList.remove('is-open')
}

navTriggerOpen.addEventListener('click', activeMenuPanel)
navTriggerClose.addEventListener('click', deactivateMenuPanel)
mobilePanelOverlay.addEventListener('click', deactivateMenuPanel)

/* --------- AOS animations --------- */
AOS.init({
  // Global settings:
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true
});

/* ---------- Banner slider --------- */
var swiper = new Swiper(".hero-slide", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  effect: "fade",
});

// Apply height to hero-content based on hero-slide
const bannerSlide = document.querySelector('.hero-slide')
const heroContent = document.querySelector('.hero-content')
// Implement matchMedia to only apply the height in screen > 1200px
const windowSize = window.matchMedia('(min-width: 1200px)')

const windowResize = (size) => {
  if (size.matches) heroContent.style.height = bannerSlide.offsetHeight + 'px'
}

// Run the function on screen resize
windowSize.addEventListener('change', windowResize)
// Initial check to se whether the media query is satisfied
//windowResize(windowSize)

/* --------- Pagos carousel --------- */
var swiper = new Swiper(".pagos-carousel", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

/* --------- Services carousel --------- */
var swiper = new Swiper(".services-carousel", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 8,
    },
  },
});

/* --- Bootstrap custom validation -- */
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()