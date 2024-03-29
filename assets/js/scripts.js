/* ------------ Preloader ----------- */
const preloader = document.getElementById('preloader');
const preloaderLogo = document.getElementById('preloaderLogo')
let preloaderTime = 2700

if (preloader) {
  if (preloaderLogo.classList.contains('preloader-logo--only')) preloaderTime = 2000
}

if (preloader) {

  const fadeOutEffect = () => {
    setInterval(() => {
      if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
      }
      if (preloader.style.opacity > 0) {
        preloader.style.opacity = 0;
        preloader.style.zIndex = -1;
      } else {
        clearInterval();
      }
    }, preloaderTime)
  }

  window.addEventListener('load', fadeOutEffect);

}

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
    delay: 5000,
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

/* ----------- Search bar (demo purpose only)----------- */
const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('click', () => {
  searchForm.classList.add('results')
})

document.addEventListener("click", (event) => {
  const isClickInside = searchInput.contains(event.target);

  if (!isClickInside) {
    searchForm.classList.remove('results')
  }
});

/* ----------- Payment methods logo selected ----------- */
// Accordion headings
const accordionCollapseOne = document.getElementById('accordionCollapseOne')
const accordionCollapseTwo = document.getElementById('accordionCollapseTwo')
// Add bootstrap collapse method
let collapseOne = new bootstrap.Collapse(accordionCollapseOne, { toggle: false })
let collapseTwo = new bootstrap.Collapse(accordionCollapseTwo, { toggle: false })
// Payment wrapper
const paymentMethodWrapper = document.querySelector('.payment-methods')
// Payment item
const paymentMethodLabel = document.querySelectorAll('.payment-methods > div > label')
const imgModal = document.querySelector('.img-medio-seleccionado')
// Change payment
const btnChangePayment = document.getElementById('cambiaPago')

// Close heading one
const collapseHeadingOne = () => {
  createMethodPreloader()
  setTimeout(() => {
    collapseOne.hide()
    collapseTwo.show()
    destroyMethodPreloader()
  }, 500);
}

// Close heading two
const collapseHeadingTwo = () => {
  collapseOne.show()
  collapseTwo.hide()
}

// Preloader
const createMethodPreloader = () => {
  const preloaderWrapper = document.createElement('span')
  preloaderWrapper.classList.add('method-preloader')
  paymentMethodWrapper.appendChild(preloaderWrapper)
}

const destroyMethodPreloader = () => {
  paymentMethodWrapper.removeChild(paymentMethodWrapper.lastElementChild)
}

// Select the image src and apply to selected method view
paymentMethodLabel.forEach(label => {
  label.addEventListener('click', () => {

    // Close heading one
    collapseHeadingOne()

    let paymentImageSrc = label.firstElementChild.src
    imgModal.src = paymentImageSrc
  })
});

// Event to change the payment method
btnChangePayment.addEventListener('click', collapseHeadingTwo)