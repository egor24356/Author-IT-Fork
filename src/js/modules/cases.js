// нажатие на свайпер section Cases
import switchCases from "./switch-cases";

function cases() {
    document.addEventListener('DOMContentLoaded', ()  => { 
        const clickSlides = document.querySelectorAll('.swiper-slide');

        // Обработчик события клика на слайд
        clickSlides.forEach((slide) => {
            slide.addEventListener('click', () => {
                const filterValueSwiper = slide.dataset.filterdescr;
                switchCases(filterValueSwiper);
            });
        });

        const url = new URL(document.location);

        const sectionDisplay = document.querySelector('.Cases');
        const sectionAfterDisplay = document.querySelector('.Cases-afterClick');
        
        const clickLink = document.querySelectorAll('.Cases__descr-link');
        // Обработчик события клика на кнопку возврата 
        clickLink.forEach((a) => {
            a.addEventListener('click', () => {
                if (url.searchParams.get('filterDescr')) {
                    url.searchParams.delete('filterDescr');
                    window.history.pushState({}, '', url.toString());
                }
                sectionAfterDisplay.style.display = 'none';
                sectionDisplay.style.display = 'block';
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            })
        });
    })
}

export default cases;


    