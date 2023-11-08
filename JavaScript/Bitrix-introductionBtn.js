
// нажатие на кнопку introduction

document.addEventListener('DOMContentLoaded', ()  => { 

    const button = document.querySelectorAll('.Bitrix-introduction__container-btn');


    // наведение на кнопку
    button.forEach((e) => {
        e.addEventListener('mousemove', () => {
            const img = e.querySelector('.Bitrix-introduction__btn-img svg path');
            const header = e.querySelector('.Bitrix-introduction__btn-header');
            img.style.fill = "#FF7D04";
            img.style.stroke = "none";
            header.style.color = "#F5F6FF";
        });
    
        e.addEventListener('mouseout', () => {
            const img = e.querySelector('.Bitrix-introduction__btn-img svg path');
            const header = e.querySelector('.Bitrix-introduction__btn-header');
            img.style.fill = "#F5F6FF";
            img.style.stroke = "#232323";
            header.style.color = "#232323";
        });
    });

    // зажатие кнопки
    button.forEach((e) => {
        e.addEventListener('mousedown', () => {
            const img = e.querySelector('.Bitrix-introduction__btn-img svg path');
            const header = e.querySelector('.Bitrix-introduction__btn-header');
            img.style.fill = "#EC7202";
            img.style.stroke = "none";
            header.style.color = "#F5F6FF";
        });
    
        e.addEventListener('mouseup', () => {
            const img = e.querySelector('.Bitrix-introduction__btn-img svg path');
            const header = e.querySelector('.Bitrix-introduction__btn-header');
            img.style.fill = "#F5F6FF";
            img.style.stroke = "#232323";
            header.style.color = "#232323";
        });
    });

    const bitrixAll = document.querySelectorAll('.bitrixAll');
    const bitrixBtnAll = document.querySelectorAll('.Bitrix__btnAll');
    //нажатие на кнопку
    bitrixBtnAll.forEach(btn => {
        btn.addEventListener('click', () => {
            const btnData = btn.getAttribute('data-introduction');
            bitrixAll.forEach(b => {
                console.log(bitrixAll);
                const bitrixData = b.getAttribute('data-introduction');
                if (btnData === bitrixData) {
                    b.classList.remove('none');
                }else{
                    b.classList.add('none');
                }
            });
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        });
    });
    bitrixBtnAll.forEach(btn => {
        btn.addEventListener('touch', () => {
            const btnData = btn.getAttribute('data-introduction');
            bitrixAll.forEach(b => {
                console.log(bitrixAll);
                const bitrixData = b.getAttribute('data-introduction');
                if (btnData === bitrixData) {
                    b.classList.remove('none');
                }else{
                    b.classList.add('none');
                }
            });
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        });
    });
})

