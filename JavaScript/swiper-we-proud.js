//свайпер section we__proud

document.addEventListener('DOMContentLoaded', ()  => { 
    const swiper__proud = new Swiper('.swiper__container__we__proud', {
        initialSlide: 0,
        spaceBetween: 140,
        loop: true,
        grabCursor: true,
        slidesPerView: "1",
        direction: 'horizontal',
        autoplay: {
            delay: 10000,
            disableOnInteraction: true
        },
        speed: 3000,
    
        // Navigation arrows
        navigation: {
            nextEl: '.arrow_right_slider_union_laptop',
            prevEl: '.arrow_left_slider_union_laptop',
        },
    
        keyboard: true,

    })
})