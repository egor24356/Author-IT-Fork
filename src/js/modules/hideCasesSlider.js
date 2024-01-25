function hideCasesSlider(filterValue) {
    const swiperContainer = document.querySelector('.Cases__swiper__container');
    const slides = swiperContainer.querySelectorAll('.Cases__swiper__slide');
    const swiperTitle = document.querySelector('.Cases__swiper-title');
    const filterNames = {
        filterAll: 'Все проекты',
        filterInteg: 'Интеграция Битрикс24',
        filterInter: 'Интернет-магазины',
        filterSite: 'Корпоративные сайты',
        filterMobil: 'Мобильные приложения',
        events: 'Мероприятия, обучение'
    }

    swiperTitle.innerHTML = filterNames[filterValue];

    slides.forEach((slide) => {
        const slideFilterValue = slide.dataset.filter;
        if ((filterValue === 'filterAll' || slideFilterValue === filterValue)) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    swiperContainer.swiper.update();
}

export default hideCasesSlider;