//курсор

document.addEventListener('DOMContentLoaded', ()  => { 

	const containerTeam = document.querySelector('.team__container')
	const cursor = document.querySelector('.cursor') // ищем элемент, который будет следовать за курсором
	
	containerTeam.onmouseover = () => {
		cursor.style.opacity = 1
	}

	containerTeam.onmouseout = () => {
		cursor.style.opacity = 0
	}

	const followCursor = () => { // объявляем функцию followCursor
		containerTeam.addEventListener('mousemove', e => { // при движении курсора
			const target = e.target // определяем, где находится курсор
			if (!target) return
				if (target.closest('a')) { // если курсор наведён на кнопку
				cursor.classList.add('cursor_active') // элементу добавляем активный класс
			} else { // иначе
				cursor.classList.remove('cursor_active') // удаляем активный класс
			}
		
			cursor.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
			cursor.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
		})	
	}
  
	followCursor(); // вызываем функцию followCursor

	const teamImg = document.querySelector('.team__img')
	const links = document.querySelector('.team__links')
	const swiperTeam = document.querySelector('.swiper__team')
	const mobileCursor = document.querySelector('.cursor-mobile-wrap')
	
	links.addEventListener('click', function() {
		teamImg.remove();
		cursor.style.display = 'none';
		mobileCursor.style.display = 'none';
		swiperTeam.style.display = 'block';
	})
})