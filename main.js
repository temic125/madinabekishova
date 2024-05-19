const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}
/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
	const header = document.getElementById('header')
	this.scrollY >= 50 ? header.classList.add('blur-header')
					   : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const contactForm = document.getElementById('contact-form'),
	  contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
	e.preventDefault()

	emailjs.sendForm('service_c9m7i3e', 'template_b09hwt6', '#contact-form', 'SFqMfeUvVa9z6vXH1')
		.then(() => {
			contactMessage.textContent = 'Message sent successfuly'

			setTimeout(() => {
				contactMessage.textContent = ''
			}, 5000)
			contactForm.reset()
		})
}
contactForm.addEventListener('submit', sendEmail)

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
})
sr.reveal(`.home__data, .experience, .contact__contain`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__card`, {interval: 100})
sr.reveal(`.about__content`, {origin: 'left'})