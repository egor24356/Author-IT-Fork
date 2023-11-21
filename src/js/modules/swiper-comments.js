//свайпер section comments
function swiperComments() {
  document.addEventListener('DOMContentLoaded', ()  => { 

    if (window.matchMedia("(min-width: 992px)").matches) {
      /* the viewport is at least 992 pixels wide */
      const swiper__comments = new Swiper('.swiper__container__comments__items', {
        effect: "coverflow",
        initialSlide: 1,
        grabCursor: true,
        slidesPerView: "1",
        centeredSlides: true,
        coverflowEffect: {
          rotate: 6,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        },
        direction: 'horizontal',
        autoplay: {
          delay: 7000,
          disableOnInteraction: true
        },
        spaceBetween: 80,
        speed: 1500,

        // Navigation arrows
        navigation: {
          nextEl: '.trust__arrow__right',
          prevEl: '.trust__arrow__left',
        },

        keyboard: true,
    })
    } else {
      /* the viewport is less than 992 pixels wide */
      const swiper__comments = new Swiper('.swiper__container__comments__items', {
        effect: "coverflow",
        initialSlide: 1,
        grabCursor: true,
        slidesPerView: "1",
        centeredSlides: true,
        coverflowEffect: {
          rotate: 6,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        },
        direction: 'horizontal',
        autoplay: {
          delay: 7000,
          disableOnInteraction: true
        },
        spaceBetween: 50,
        speed: 3000,

        // Navigation arrows
        navigation: {
          nextEl: '.trust__arrow__right',
          prevEl: '.trust__arrow__left',
        },

        keyboard: true,
    })
    }
  })
}

export default swiperComments;