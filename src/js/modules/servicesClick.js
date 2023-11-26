function servicesClick() {
    document.addEventListener('DOMContentLoaded', ()  => {
        const commasAll = document.querySelectorAll('.comma__service');
        
        commasAll.forEach(commas => {
            console.log(commas);
            commas.addEventListener('click', () => {
            // не видит клик блять
                const pagesAll = document.querySelectorAll('.services-page');
                const filterCommas = commas.dataset.services;
                console.log(filterCommas);

                pagesAll.forEach (pages => {
                    const filterPage = pages.dataset.services;
                    if (filterPage === filterCommas) {
                        pages.style.display = 'block';
                    } else {
                        pages.style.display = 'none';
                    }
                })

            })
        })
    })
}

export default servicesClick;