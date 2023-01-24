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

/* --------- Pagos carousel --------- */
var swiper = new Swiper(".pagos-carousel", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7500,
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