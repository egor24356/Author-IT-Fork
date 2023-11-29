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

          pagination: {
            el: '.custom-pagination',
            type: 'fraction',
            clickable: true,
          },
      });
  })
}

export default swiperTeam;