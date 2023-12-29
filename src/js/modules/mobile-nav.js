function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const navCircle = document.querySelector('.mobile-nav-circle')
	const html = document.querySelector('html');
	const ANIM_DURATION = parseFloat(getComputedStyle(navCircle).transitionDuration) * 1000;

	function changeIcon() {
		menuIcon.classList.toggle('nav-icon--active');
	}

	function changeOverflow() {
		html.classList.toggle('no-scroll');
		document.body.classList.toggle('no-scroll');
		if (menuIcon.classList.contains('nav-icon--active')) {
			document.body.style.height = '100vh';
		} else {
			document.body.style.height = 'auto';
		}
	}

	const searchbar = document.querySelector('.mobile-searchbar')

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		// nav.classList.toggle('visually-hidden');
		navCircle.classList.toggle('mobile-nav-circle--active');
		if (menuIcon.classList.contains('nav-icon--active')) {
			searchbar.content = '#232323';
			setTimeout(changeIcon, ANIM_DURATION - 50);
			setTimeout(changeOverflow, ANIM_DURATION);
			
		} else {
			searchbar.content = '#F5F6FF';
			changeIcon();
			changeOverflow();
		}
	};
}

export default mobileNav;