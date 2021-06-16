const buttonNav = document.querySelector('.toggle-nav')
const nav = document.querySelector('.nav')

buttonNav.addEventListener('click', () => {
  nav.classList.toggle('navigation-open')
})
