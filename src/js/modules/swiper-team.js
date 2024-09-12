//свайпер section team


function swiperTeam() {
  document.addEventListener('DOMContentLoaded', ()  => {
      const swiper__team = new Swiper('.swiper__team', {
          initialSlide: 0,
          spaceBetween: 140,
          slidesPerView: 1,
          grabCursor: true,
          direction: 'horizontal',
          speed: 1500,
          keyboard: true,
          loop: true,

          pagination: {
            el: '.custom-pagination',
            type: 'fraction',
          },

          navigation: {
            nextEl: ".swiper-team__arrowNext",
            prevEl: ".swiper-team__arrowPrev",
          },
      });
  })
}

export default swiperTeam;