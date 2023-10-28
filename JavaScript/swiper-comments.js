//свайпер section comments

document.addEventListener('DOMContentLoaded', ()  => { 

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
      speed: 3000,

      // Navigation arrows
      navigation: {
        nextEl: '.trust__arrow__right',
        prevEl: '.trust__arrow__left',
      },

      keyboard: true,
  })
})
 