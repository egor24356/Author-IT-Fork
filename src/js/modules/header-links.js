function headerLinks() {
    const urlPath = new URL(document.location).pathname;
    
    const header = document.querySelector('.header');
    const headerLinks = header.querySelectorAll('.nav__list-item__link');

    if (urlPath === '/') {
        headerLinks[0].classList.add('tabs__item--active');
    } else {
        const pageName = urlPath.split('.')[0];
        
        headerLinks.forEach(l => {
            const linkUrlPath = new URL(l.href).pathname;
            const linkName = linkUrlPath.split('.')[0];
            
            if (linkName == pageName) {
                l.classList.add('tabs__item--active');
            }
            
        });
    }
}

export default headerLinks;