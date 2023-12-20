// нажатие на свайпер section Cases
import switchCases from "./switch-cases";

function cases() {
    document.addEventListener('DOMContentLoaded', ()  => { 
        const clickSlides = document.querySelectorAll('.swiper-slide');
        let scrollSaver = 0;

        // Обработчик события клика на слайд

        clickSlides.forEach((slide) => {
            slide.addEventListener('click', () => {
                scrollSaver = window.scrollY;
                const filterValueSwiper = slide.dataset.filterdescr;
                switchCases(filterValueSwiper);
            });
        });

        const url = new URL(document.location);

        const sectionDisplay = document.querySelector('.Cases');
        const sectionAfterDisplay = document.querySelector('.Cases-afterClick');

        function hideCase() {
            sectionAfterDisplay.classList.add('none');
            sectionDisplay.classList.remove('none');
        }

        // Обработчик события клика на кнопку возврата 
        
        const clickLink = document.querySelectorAll('.Cases__descr-link');

        clickLink.forEach((a) => {
            a.addEventListener('click', () => {
                if (url.searchParams.get('filterDescr')) {
                    url.searchParams.delete('filterDescr');
                    window.history.pushState({}, '', url.toString());
                }
                hideCase();
                window.scrollTo({
                    top: scrollSaver,
                    left: 0,
                    behavior: 'auto'
                });
            })
        });

        /* Возвращение назад при открытом кейсе */

        history.pushState({}, null, '');
        window.onpopstate = function(e) {
            history.pushState({}, null, '');
            e.preventDefault();
            hideCase();
            window.scrollTo({
                top: scrollSaver,
                left: 0,
                behavior: 'auto'
            });
        }

    })
}

export default cases;


    