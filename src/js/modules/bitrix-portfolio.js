function portfolio() {

    if (window.matchMedia('(min-width: 992px)').matches) {
        const ANIM_DURATION = 300;
        const body = document.querySelector('body');
        const portfolioSection = document.querySelector('.ik-element');
        const secondBlock = document.querySelector('.portfolio-2');
        portfolioSection.addEventListener('wheel', function(e) {
            // body.style.overflow = 'hidden';
            if (e.deltaY > 0) {
                secondBlock.classList.add('portfolio-block--showed');
            } else {
                secondBlock.classList.remove('portfolio-block--showed');

            }
        })

        
    }
}

export default portfolio;