//свайпер section team
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function swiperTeam() {
    document.addEventListener('DOMContentLoaded', () => {
        const swiper__team = new Swiper('.swiper__team', {
            modules: [Navigation, Pagination],
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
    });
}

export default swiperTeam;