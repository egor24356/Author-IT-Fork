
//переход на нужный слайд при нажатии на соответствующую иконку страницы "О нас"

function aboutus() {
    document.addEventListener('DOMContentLoaded', ()  => { 
        const swiperAboutUs = new Swiper('.swiper__container__AboutUs', {
            initialSlide: 0,
            spaceBetween: 140,
            loop: true,
            grabCursor: true,
            slidesPerView: 1,
            direction: 'horizontal',
        //  autoplay: {
        //      delay: 10000,
        //      disableOnInteraction: true
        //  },
        //  speed: 1000,
        
            // Navigation arrows
            navigation: {
                nextEl: '.AboutUs-promo-arrow-next',
                prevEl: '.AboutUs-promo-arrow-prev',
            },
            keyboard: true,
        })

        const swiperContainer = document.querySelector('.swiper__wrapper__AboutUs');
        const slidesAbout = swiperContainer.querySelectorAll('.slide__AboutUs');
        const iconSwiperAbout = document.querySelector('.AboutUs-promo__slider-icons');
        const iconsAbout = iconSwiperAbout.querySelectorAll('.AboutUs-icons');
    
        iconsAbout.forEach((icon) => {
            icon.addEventListener('click', () => {
                const filterIconAbout = icon.dataset.filterabout;
                slidesAbout.forEach((slide, index) => {
                    const filterSlideAbout = slide.dataset.filterabout;
                    if (filterIconAbout === filterSlideAbout) {
                        swiperAboutUs.slideTo(index, 0, false);

                    }
                });
            });
        });

    });
}

export default aboutus;