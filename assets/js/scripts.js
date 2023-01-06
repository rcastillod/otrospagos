/* ----------- Nav trigger ---------- */
const navTriggerOpen = document.getElementById('navTrigger')
const navTriggerClose = document.getElementById('closeTrigger')
const mobilePanel = document.getElementById('mobileNav')
const mobilePanelOverlay = document.querySelector('.overlay')

const activeMenuPanel = () => {
  navTrigger.classList.add('is-active')
  mobilePanel.classList.add('is-open')
  mobilePanelOverlay.classList.add('is-open')
}

const deactivateMenuPanel = () => {
  navTrigger.classList.remove('is-active')
  mobilePanel.classList.remove('is-open')
  mobilePanelOverlay.classList.remove('is-open')
}

navTriggerOpen.addEventListener('click', activeMenuPanel)
navTriggerClose.addEventListener('click', deactivateMenuPanel)
mobilePanelOverlay.addEventListener('click', deactivateMenuPanel)