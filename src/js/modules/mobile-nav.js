function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const navCircle = document.querySelector('.mobile-nav-circle')

	navBtn.onclick = function () {
		// nav.classList.toggle('mobile-nav--open');
		// nav.classList.toggle('visually-hidden');
		navCircle.classList.toggle('mobile-nav-circle--active');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;