function servicesOpen() {
    const paramPage = new URL(document.location).searchParams.get('page');

    if (paramPage) {
        const main = document.querySelector('.main-services');
        const servicesPages = document.querySelectorAll('.services-page');
        const servicesMailerFooter = document.querySelector('.services-mailer-footer');
        
        servicesPages.forEach(page => {
            if (paramPage == page.dataset.services) {
                main.classList.add('none');
                page.classList.remove('none');
            }
        });
        servicesMailerFooter.classList.remove('none');
    }
}

export default servicesOpen;