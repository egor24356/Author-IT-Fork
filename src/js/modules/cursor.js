//курсор
function cursor() {
	document.addEventListener('DOMContentLoaded', ()  => { 
		const body = document.querySelector('body');
		const cursor = document.querySelector('.cursor') // ищем элемент, который будет следовать за курсором
		
		const containerTeam = document.querySelector('.team__container')  // was
		const containerTeamTopCoord = containerTeam.getBoundingClientRect().top + window.scrollY;
		const containerTeamBottomCoord = containerTeamTopCoord + containerTeam.getBoundingClientRect().height;
		
		let rTop = Math.abs(containerTeamTopCoord);
		let rBottom = Math.abs(containerTeamBottomCoord);

		let cursorSize = cursor.getBoundingClientRect().bottom - cursor.getBoundingClientRect().top;

		const cursorObj = {
			pageY: 0,
			pageX: 0,
			deltaY: 0
		}

		window.addEventListener('mousemove', mousemoveTracker);
		
		function mousemoveTracker(e) {
			cursorObj.deltaY = e.pageY - window.scrollY;
			cursorObj.pageX = e.pageX;
			cursorObj.pageY = e.pageY;
			cursorToggler();
		}

		window.addEventListener('scroll', scrollTracker);
		
		function scrollTracker() {
			cursorObj.pageY = window.scrollY + cursorObj.deltaY;
			cursorToggler();
			cursorTracker();
		}

		function cursorToggler() {
			rTop = Math.abs(cursorObj.pageY - containerTeamTopCoord);
			rBottom = Math.abs(cursorObj.pageY - containerTeamBottomCoord);
			if (rTop < 400 || rBottom < 400 ||		
					((cursorObj.pageY - containerTeamTopCoord) > 0 && (cursorObj.pageY - containerTeamBottomCoord) < 0)) {
				cursor.classList.remove('no-opacity');
				body.style = 'cursor: none';
				if (cursorObj.pageY - containerTeamTopCoord < 0) {
					cursor.style = `transform: scale(${1 - rTop/(400)})`;
				}
				if (cursorObj.pageY - containerTeamBottomCoord > 0) {
					cursor.style = `transform: scale(${1 - rBottom/(400)})`;
				}
				if ((cursorObj.pageY - containerTeamTopCoord) > 0 && (cursorObj.pageY - containerTeamBottomCoord) < 0) {
					cursor.style = `transform: none`;
				}
				cursorSize = cursor.getBoundingClientRect().bottom - cursor.getBoundingClientRect().top;
			} else {
				cursor.classList.add('no-opacity');
				body.style = 'cursor: auto';
			}
		}

		const followCursorGlob = () => { // объявляем функцию followCursor
			window.addEventListener('mousemove', e => { // при движении курсора
				const target = e.target // определяем, где находится курсор
				// if (!target) return
				if (target.closest('a') || target.closest('.cursor-mobile-wrap')) { // если курсор наведён на кнопку
					cursor.classList.add('cursor_active') // элементу добавляем активный класс
				} else { // иначе
					cursor.classList.remove('cursor_active') // удаляем активный класс
				}
				cursorTracker();
			})	
		}
	
		followCursorGlob();

		function cursorTracker() {
			if (cursor.classList.contains('cursor_active')) {
				cursor.style.left = cursorObj.pageX - 250/2 + 'px'; // задаём элементу позиционирование слева
				cursor.style.top = cursorObj.pageY - 250/2 - 66 - 18 + 'px'; // 66 - высота хедера, 18 - отступ над хедером
			} else {
				cursor.style.left = cursorObj.pageX - 150/2 + 'px'; // задаём элементу позиционирование слева
				cursor.style.top = cursorObj.pageY - 150/2 - 66 - 18 + 'px'; // 66 - высота хедера, 18 - отступ над хедером
			}
			// cursor.style.left = cursorObj.pageX - (cursorSize / 4) + 'px'; // задаём элементу позиционирование слева
			// cursor.style.top = cursorObj.pageY - (cursorSize / 2) + 'px'; // задаём элементу позиционирование сверху
		}

		
		const teamImg = document.querySelector('.team__img')
		const links = document.querySelector('.team__links')
		const swiperTeam = document.querySelector('.swiper__team')
		const mobileCursor = document.querySelector('.cursor-mobile-wrap')
		const nextCircle = document.querySelector('.cursor-mobile-wrap');

		links.addEventListener('click', openSlider);
		nextCircle.addEventListener('click', openSlider);
		
		function openSlider () {
			window.removeEventListener('mousemove', mousemoveTracker);
			window.removeEventListener('scroll', scrollTracker);
			body.style = 'cursor: auto';
			teamImg.remove();
			cursor.style.display = 'none';
			mobileCursor.style.display = 'none';
			swiperTeam.style.display = 'block';
		}
	})
}

export default cursor;