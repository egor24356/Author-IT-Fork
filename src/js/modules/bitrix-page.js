import changeMailer from "./change-mailer";
import portfolio from "./bitrix-portfolio"

function bitrixPage() {

// нажатие на кнопку introduction

document.addEventListener('DOMContentLoaded', ()  => { 

    const bitrixBefore = document.querySelector('.before-click'); //  изначальная страница битрикса
    const bitrixBtnAll = document.querySelector('.Bitrix__btnAll'); // кнопка на изначальной странице
    const bitrixAll = document.querySelector('.bitrixAll'); // страница, открывающаяся после нажатия кнопки

    //нажатие на кнопку
    bitrixBtnAll.addEventListener('click', () => {
        portfolio();
        bitrixBefore.classList.add('none'); 
        const btnData = bitrixBtnAll.getAttribute('data-introduction');
        const bitrixData = bitrixAll.getAttribute('data-introduction');
        if (btnData === bitrixData) {
            bitrixAll.classList.remove('none');
        } else{
            bitrixAll.classList.add('none');
        }
        changeMailer();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    });
    //нажатие на кнопку на мобилке
    bitrixBtnAll.addEventListener('touch', () => {
        const btnData = bitrixBtnAll.getAttribute('data-introduction');
        const bitrixData = bitrixAll.getAttribute('data-introduction');
        if (btnData === bitrixData) {
            bitrixAll.classList.remove('none');
        } else{
            bitrixAll.classList.add('none');
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    });
})
}

export default bitrixPage;