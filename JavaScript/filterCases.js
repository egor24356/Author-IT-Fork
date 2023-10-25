// нажатие на фильтры section Cases

document.addEventListener('DOMContentLoaded', ()  => { 

    const filterItems = document.querySelectorAll('.Cases__filter-item');
    const swiperContainer = document.querySelector('.Cases__swiper__container');
    let visibleSlides = getVisibleSlides();

    function getVisibleSlides() {
        const containerWidth = swiperContainer.offsetWidth;
        const slideWidth = swiperContainer.querySelector('.Cases__swiper__slide').offsetWidth;
        return Math.floor(containerWidth / slideWidth);
    }

    filterItems.forEach(filterItem => {
        filterItem.addEventListener('click', () => {
            
            const filterValue = filterItem.dataset.filter;
            const slides = swiperContainer.querySelectorAll('.Cases__swiper__slide');

            visibleSlides = getVisibleSlides();

            slides.forEach((slide, index) => {
                const slideFilterValue = slide.dataset.filter;
                if ((filterValue === 'filterAll' || slideFilterValue === filterValue) && index < visibleSlides) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });

            swiperContainer.swiper.update();
        });
    });
});

