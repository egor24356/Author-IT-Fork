//свайпер section team



document.addEventListener('DOMContentLoaded', ()  => {
    let sliderDelay = 10000;
    const swiper__team = new Swiper('.swiper__team', {
        initialSlide: 0,
        spaceBetween: 140,
        slidesPerView: 1,
        grabCursor: true,
        direction: 'horizontal',
        autoplay: {
            delay: sliderDelay,
            disableOnInteraction: true
        },
        
        speed: 3000,
        keyboard: true,

        pagination: {
          el: '.custom-pagination',
          type: 'fraction',
          clickable: true,
        },
    });
})