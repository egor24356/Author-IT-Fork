function headerLinks() {
    const urlPath = new URL(document.location).pathname;
    
    const header = document.querySelector('.header');
    const headerLinks = header.querySelectorAll('.tabs__item');
    
    const pageName = urlPath.split('.')[0];
    
    headerLinks.forEach(l => {
        const linkUrlPath = new URL(l.href).pathname;
        const linkName = linkUrlPath.split('.')[0];
        
        if (linkName == pageName) {
            l.classList.add('tabs__item--active');
        }

    });
}

export default headerLinks;