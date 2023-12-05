function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const navCircle = document.querySelector('.mobile-nav-circle')
	const html = document.querySelector('html');

	function changeIcon() {
		menuIcon.classList.toggle('nav-icon--active');
	}

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		// nav.classList.toggle('visually-hidden');
		navCircle.classList.toggle('mobile-nav-circle--active');
		if (menuIcon.classList.contains('nav-icon--active')) {
			setTimeout(changeIcon, 350);
			html.classList.remove('no-scroll');
			document.body.style.height = 'auto';
			document.body.classList.remove('no-scroll');

		} else {
			menuIcon.classList.toggle('nav-icon--active');
			html.classList.add('no-scroll');
			document.body.style.height = '100vh';
			document.body.classList.add('no-scroll');
		}
	};
}

export default mobileNav;