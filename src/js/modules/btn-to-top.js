function btnToTop () {
    function action() {
        const form = document.querySelector('.b24-form');
        if (!form) return

        const btn = document.querySelector('.to-top');
        
        let scroll;
        let formPos;
        
        window.addEventListener('scroll', function() {
            scroll = window.scrollY;
            formPos = form.getBoundingClientRect().top + scroll;
            if (scroll > 1500 && scroll < formPos - 500) {
                btn.classList.add('to-top--active');
            } else {
                btn.classList.remove('to-top--active');
            }
        })
    }
    setTimeout(action, 1000);
}

export default btnToTop;