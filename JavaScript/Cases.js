// нажатие на свайпер section Cases

document.addEventListener('DOMContentLoaded', ()  => { 

    const sectionDisplay = document.querySelector('.Cases');
    const sectionAfterDisplay = document.querySelector('.Cases-afterClick');
    const clickSlides = sectionDisplay.querySelectorAll('.swiper-slide');

    // Обработчик события клика на слайд
    clickSlides.forEach((slide) => {
        slide.addEventListener('click', () => {
            const filterValueSwiper = slide.dataset.filterdescr;
            const casesWrapperDescr = sectionAfterDisplay.querySelectorAll('.Cases__wrapper-descr');
            
            sectionDisplay.style.display = 'none';
            sectionAfterDisplay.style.display = 'flex';
            
            casesWrapperDescr.forEach((descr) => {
                const filterValueDescr = descr.dataset.filterdescr;
                if (filterValueSwiper === filterValueDescr) {
                    descr.classList.remove('none') ;
                } else {
                    descr.classList.add('none') ;
                }
            })
        });
    });
    
    const clickLink = document.querySelectorAll('.Cases__descr-link');
    // Обработчик события клика на кнопку возврата 

    clickLink.forEach((a) => {
        a.addEventListener('click', () => {
            sectionAfterDisplay.style.display = 'none';
            sectionDisplay.style.display = 'block';
        })
    });
})


    