//курсор
function cursor() {
	document.addEventListener('DOMContentLoaded', ()  => { 

		const containerTeam = document.querySelector('.team__container')  // was
		const cursor = document.querySelector('.cursor') // ищем элемент, который будет следовать за курсором

		containerTeam.onmouseover = (e) => {
			// cursor.style.opacity = 1 // was
			cursor.classList.remove('no-opacity');
		}

		containerTeam.onmouseout = (e) => { 
			// cursor.style.opacity = 0 // was
			cursor.classList.add('no-opacity');
		}

		const followCursor = () => { // объявляем функцию followCursor
			containerTeam.addEventListener('mousemove', e => { // при движении курсора
				const target = e.target // определяем, где находится курсор
				if (!target) return
					if (target.closest('a') || target.closest('.cursor-mobile-wrap')) { // если курсор наведён на кнопку
					cursor.classList.add('cursor_active') // элементу добавляем активный класс
				} else { // иначе
					cursor.classList.remove('cursor_active') // удаляем активный класс
				}
				cursor.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
				cursor.style.top = e.pageY - (cursor.offsetHeight / 4) + 'px'; // задаём элементу позиционирование сверху
			})	
		}
	
		followCursor(); // вызываем функцию followCursor

		const teamImg = document.querySelector('.team__img')
		const links = document.querySelector('.team__links')
		const swiperTeam = document.querySelector('.swiper__team')
		const mobileCursor = document.querySelector('.cursor-mobile-wrap')
		const nextCircle = document.querySelector('.cursor-mobile-wrap');

		links.addEventListener('click', openSlider);
		nextCircle.addEventListener('click', openSlider);
		
		function openSlider () {
			teamImg.remove();
			cursor.style.display = 'none';
			mobileCursor.style.display = 'none';
			swiperTeam.style.display = 'block';

		}
	})
}

export default cursor;