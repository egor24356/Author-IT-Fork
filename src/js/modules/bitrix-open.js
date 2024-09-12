import changeMailer from "./change-mailer";
function bitirixOpen() {
    const footerLinks = document.querySelector('.bitrix-list');
    const bitrixBefore = document.querySelector('.before-click');
    const bitrixAll = document.querySelector('.bitrixAll');

    function checkUrl() {
        const urlHash = new URL(document.location).hash;
        if (urlHash && urlHash != '#mailer') {
            changeBitrixPage();
            changeMailer();
        }
    };

    checkUrl();

    footerLinks.addEventListener('click', function(e) {
        if (e.target.closest('.services__links-item')) {
            if (!bitrixBefore.classList.contains('none')) {
                changeBitrixPage();
                changeMailer();
            } 
        };
    })
    
    function changeBitrixPage() {
        bitrixBefore.classList.add('none');
        bitrixAll.classList.remove('none');
    }
}

export default bitirixOpen;