function headerLinks() {
    const doc = window.document;
    const currentURL = doc.URL;
    const header = document.querySelector('.header');
    const headerLinks = header.querySelectorAll('.tabs__item');
    
    const splittedUrl = currentURL.split('/');
    const pageName = splittedUrl.at(-1).split('.')[0];
    
    headerLinks.forEach(l => {
        const splitted = l.href.split('/');
        const linkName = splitted.at(-1).split('.')[0];
        
        if (linkName == pageName) {
            l.classList.add('tabs__item--active');
        }

    });
}

export default headerLinks;