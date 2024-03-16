//свайпер section we__proud
function swiperWeProud() {
    document.addEventListener('DOMContentLoaded', ()  => { 
        if (window.matchMedia("(min-width: 992px)").matches) {
            /* the viewport is at least 992 pixels wide */
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
                speed: 1500,
            
                // Navigation arrows
                navigation: {
                    nextEl: '.arrow_right_slider_union_laptop',
                    prevEl: '.arrow_left_slider_union_laptop',
                },
            
                keyboard: true,
        
            })
        } else {
            /* the viewport is less than 992 pixels wide */
            const swiper__proud = new Swiper('.swiper__container__we__proud', {
                initialSlide: 0,
                spaceBetween: 40,
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
        }
    })
}

export default swiperWeProud;