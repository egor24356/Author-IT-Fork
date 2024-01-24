function servicesClick() {
    document.addEventListener('DOMContentLoaded', ()  => {
        const commasAll = document.querySelectorAll('.container__commas-for-js');
        const pagesAll = document.querySelectorAll('.services-page');
        const pageDelete = document.querySelector('.main-services');
        const mailerFooterServices = document.querySelector('.services-mailer-footer');
        
        commasAll.forEach(commas => {
            commas.addEventListener('click', () => {
                const filterCommas = commas.dataset.services;
                
                pagesAll.forEach (pages => {
                    const filterPage = pages.dataset.services;
                    
                    if (filterCommas === filterPage) {
                        pageDelete.classList.add('none');
                        pages.classList.add('block');
                        pages.classList.remove('none');
                        mailerFooterServices.classList.remove('none');
                    }

                })
            })
        })
        const bitrixCloudBtn = document.querySelector(`.container__commas-for-js[data-services="bitrixCloud"]`);
        const bitrixPortalBtn = document.querySelector(`.container__commas-for-js[data-services="bitrixPortal"]`);
        const bitrixEnterBtn = document.querySelector(`.container__commas-for-js[data-services="bitrixEnter"]`);

        bitrixCloudBtn.addEventListener('click', function(){ location.href='/bitrix.html#cloud' })
        bitrixPortalBtn.addEventListener('click', function(){ location.href='/bitrix.html#portal' })
        bitrixEnterBtn.addEventListener('click', function(){ location.href='/bitrix.html#enter' })
    })
}

export default servicesClick;