function btnToTop () {
    const footer = document.querySelector('.footer');
    if (!footer) return

    const btn = document.querySelector('.to-top');
    let scroll;
    let scrollBefore = 0, deltaScroll = 0;
    let footerPos;

    window.addEventListener('scroll', function(e) {
        scrollBefore = scroll;
        scroll = window.scrollY;
        deltaScroll = scroll - scrollBefore;

        footerPos = footer.getBoundingClientRect().top + scroll;
        if (scroll > 1500 && scroll < footerPos - 1000 && deltaScroll < 0) {
            btn.classList.add('to-top--active');
        } else {
            btn.classList.remove('to-top--active');
        }
    })
}

export default btnToTop;