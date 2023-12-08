function btnToTop () {
    const footer = document.querySelector('.footer');
    if (!footer) return

    const btn = document.querySelector('.to-top');
    let scroll;
    let footerPos;

    window.addEventListener('scroll', function() {
        
        scroll = window.scrollY;
        footerPos = footer.getBoundingClientRect().top + scroll;
        if (scroll > 1500 && scroll < footerPos - 1000) {
            btn.classList.add('to-top--active');
        } else {
            btn.classList.remove('to-top--active');
        }
    })
}

export default btnToTop;