function servicesClick() {
    document.addEventListener('DOMContentLoaded', ()  => {
        const commasAll = document.querySelectorAll('.container__commas-for-js');
        const pagesAll = document.querySelectorAll('.services-page');
        const pageDelete = document.querySelector('.main-services');
        
        commasAll.forEach(commas => {
            commas.addEventListener('click', () => {
                const filterCommas = commas.dataset.services;
                
                pagesAll.forEach (pages => {
                    const filterPage = pages.dataset.services;
                    
                    if (filterCommas === filterPage) {
                        pageDelete.classList.add('none');
                        pages.classList.add('block');
                        pages.classList.remove('none');
                    }

                })
            })
        })
    })
}

export default servicesClick;