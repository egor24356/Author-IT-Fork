!function(){"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".before-click"),t=document.querySelector(".Bitrix__btnAll"),n=document.querySelector(".bitrixAll");t.addEventListener("click",(()=>{e.classList.add("none"),t.getAttribute("data-introduction")===n.getAttribute("data-introduction")?n.classList.remove("none"):n.classList.add("none"),window.scrollTo({top:0,left:0,behavior:"smooth"})})),t.addEventListener("touch",(()=>{t.getAttribute("data-introduction")===n.getAttribute("data-introduction")?n.classList.remove("none"):n.classList.add("none"),window.scrollTo({top:0,left:0,behavior:"smooth"})}))})),function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}}(),function(){const e=document.querySelector(".benefits-tabs"),t=document.querySelector(".read__all"),n=document.querySelector(".advantages__read__all__arrow"),o=document.querySelector(".advantages__read__all");t.addEventListener("click",(function(){if(n.classList.toggle("arrow__read__all_active"),e.classList.contains("none")){e.classList.remove("none"),o.innerHTML="скрыть всё";let t=window.getComputedStyle(e).height;e.animate([{height:0},{height:t}],100,"ease")}else{let t=window.getComputedStyle(e).height;o.innerHTML="читать всё",e.animate([{height:t},{height:0}],100,"ease").addEventListener("finish",(function(){e.classList.add("none")}))}}))}()}();