function portfolio() {

    if (window.matchMedia('(min-width: 992px)').matches) {
        const ANIM_DURATION = 300;
        const body = document.querySelector('body');
        const portfolioSection = document.querySelectorAll('.ik-element__container');
        const secondBlock = document.querySelector('.portfolio-2');
        portfolioSection.forEach(p => p.addEventListener('mouseenter', function() {
            body.style = 'overflow: hidden';
        }));
        portfolioSection.forEach(p => p.addEventListener('mouseleave', function() {
            body.style = 'overflow: auto';

        }));
        portfolioSection.forEach(p => p.addEventListener('wheel', function(e) {
            if (e.deltaY > 0) {
                secondBlock.classList.add('portfolio-block--showed');
            } else {
                secondBlock.classList.remove('portfolio-block--showed');
            }
        }));

        
    }
}

export default portfolio;