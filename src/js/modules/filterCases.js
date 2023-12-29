// нажатие на фильтры section Cases

function filterCases() {

    document.addEventListener('DOMContentLoaded', ()  => { 

        const filterItems = document.querySelectorAll('.Cases__filter-item');
        const swiperContainer = document.querySelector('.Cases__swiper__container');
        const swiperTitle = document.querySelector('.Cases__swiper-title');

        let visibleSlides = getVisibleSlides();

        function getVisibleSlides() {
            const containerWidth = swiperContainer.offsetWidth;
            const slideWidth = swiperContainer.querySelector('.Cases__swiper__slide').offsetWidth;
            return Math.floor(containerWidth / slideWidth);
        }

        filterItems.forEach(filterItem => {
            filterItem.addEventListener('click', (e) => {

                filterItems.forEach(i => {
                    i.classList.remove('Cases__filter-item--active')
                    if (i == e.target) {
                        i.classList.add('Cases__filter-item--active')
                    }
                })

                const filterValue = filterItem.dataset.filter;
                swiperTitle.innerHTML = filterItem.innerHTML;
                const slides = swiperContainer.querySelectorAll('.Cases__swiper__slide');

                visibleSlides = getVisibleSlides();

                slides.forEach((slide) => {
                    const slideFilterValue = slide.dataset.filter;
                    if ((filterValue === 'filterAll' || slideFilterValue === filterValue)) {
                        slide.style.display = 'block';
                    } else {
                        slide.style.display = 'none';
                    }
                });

                swiperContainer.swiper.update();
            });
        });
    });
}

export default filterCases;