!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),document.querySelector(".arrow-up-btn").addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),console.log(window.matchMedia("(min-width: 768px)").matches),window.matchMedia("(min-width: 768px)").matches&&document.addEventListener("DOMContentLoaded",(()=>{new Swiper(".Cases__swiper__container",{initialSlide:0,spaceBetween:20,grabCursor:!0,direction:"horizontal",slidesPerView:"auto",autoplay:{delay:1e4,disableOnInteraction:!0},speed:3e3,navigation:{nextEl:".Cases__swiper__arrow-next",prevEl:".Cases__swiper__arrow-prev"},keyboard:!0})})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".Cases__filter-item"),t=document.querySelector(".Cases__swiper__container");let o=n();function n(){const e=t.offsetWidth,o=t.querySelector(".Cases__swiper__slide").offsetWidth;return Math.floor(e/o)}e.forEach((e=>{e.addEventListener("click",(()=>{const s=e.dataset.filter,r=t.querySelectorAll(".Cases__swiper__slide");o=n(),r.forEach(((e,t)=>{const n=e.dataset.filter;e.style.display=("filterAll"===s||n===s)&&t<o?"block":"none"})),t.swiper.update()}))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".Cases"),t=document.querySelector(".Cases-afterClick");e.querySelectorAll(".swiper-slide").forEach((o=>{o.addEventListener("click",(()=>{const n=o.dataset.filterdescr,s=t.querySelectorAll(".Cases__wrapper-descr");e.style.display="none",t.style.display="flex",s.forEach((e=>{const t=e.dataset.filterdescr;n===t?e.classList.remove("none"):e.classList.add("none")}))}))})),document.querySelectorAll(".Cases__descr-link").forEach((o=>{o.addEventListener("click",(()=>{t.style.display="none",e.style.display="block"}))}))}))}();