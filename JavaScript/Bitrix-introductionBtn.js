Skip to content
Avtor-IT
/
Author-IT

Type / to search

Code
Issues
Pull requests
1
Actions
Projects
Security
Insights
Settings
Pane width
Use a value between 13% and 50%

17
Change width
Files
Go to file
t
.vscode
settings.json
AboutUs_icons
AboutUs_img
Bitrix_icons
Cases_icons
Cases_img
JavaScript
AboutUs.js
Bitrix-introductionBtn.js
Cases.js
cursor.js
filterCases.js
mailer.js
running-line.js
swiper-Cases.js
swiper-comments.js
swiper-team.js
swiper-we-proud.js
css
normalize.css
style.css
fonts
html
AboutUs.html
Bitrix.html
Cases.html
Services.html
index.html
icon1
img1
libs
README.md
mail.php
Documentation • Share feedback
BreadcrumbsAuthor-IT/JavaScript
/Bitrix-introductionBtn.js
Latest commit
AnastasiaManaeva
AnastasiaManaeva
Test
fd92ed9
 · 
1 hour ago
History
File metadata and controls

Code

Blame
34 lines (30 loc) · 1.28 KB
// нажатие на свайпер section Cases

document.addEventListener('DOMContentLoaded', ()  => { 

    const button = document.querySelector('.Bitrix-introduction__container-btn');
    const buttonImg = document.querySelector('.Bitrix-introduction__btn-img svg path');
    const buttonHeader = document.querySelector('.Bitrix-introduction__btn-header');

    // Обработчик события клика на слайд
    button.addEventListener('mousemove', e => {
        buttonImg.style.fill = "#FF7D04";
        buttonImg.style.stroke = "none";
        buttonHeader.style.color = "#F5F6FF";
    });
    button.addEventListener('mouseout', e => {
        buttonImg.style.fill = "#F5F6FF";
        buttonImg.style.stroke = "#232323";
        buttonHeader.style.color = "#232323";
    });
    button.addEventListener('mousedown', e => {
        buttonImg.style.fill = "#EC7202";
        buttonImg.style.stroke = "none";
        buttonHeader.style.color = "#F5F6FF";
    });
    button.addEventListener('mouseup', e => {
        buttonImg.style.fill = "#F5F6FF";
        buttonImg.style.stroke = "#232323";
        buttonHeader.style.color = "#232323";
    });
    button.addEventListener('click', e => {
    
    })
    // добавить selectorAll
})
Author-IT/JavaScript/Bitrix-introductionBtn.js at main · Avtor-IT/Author-IT