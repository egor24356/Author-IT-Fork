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