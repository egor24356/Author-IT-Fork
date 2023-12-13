function portfolio() {
    const bitrixBefore = document.querySelector('.before-click');
    if (window.matchMedia('(min-width: 992px)').matches && !bitrixBefore.classList.contains('none')) {
        const ANIM_DURATION = 300;
        const body = document.querySelector('body');
        const portfolioSection = document.querySelector('.ik-element');
        const secondBlock = document.querySelector('.portfolio-2');
        const thirdBlock = document.querySelector('.portfolio-3');
        const portfolioBlock = document.querySelector('.portfolio');
        
        let isAnimated = false;

        window.addEventListener('scroll', function() {      
            if (isAnimated) return;
            let posY = portfolioBlock.getBoundingClientRect().top;
            let coordY = window.scrollY;
            if (Math.abs(posY) < 20 && !bitrixBefore.classList.contains('none')) {
                body.classList.add('no-scroll');
                isAnimated = true;
                setTimeout(changeFlag, ANIM_DURATION);
                setTimeout(scrollToSection, ANIM_DURATION);
                // window.scrollTo(0, coordY + posY);
                window.addEventListener('wheel', wheelListener);
            }
        })

        function scrollToSection() {
            isAnimated = true;
            setTimeout(changeFlag, ANIM_DURATION);
            let posY = portfolioBlock.getBoundingClientRect().top;
            let coordY = window.scrollY;
            window.scrollTo(0, coordY + posY);
        }


        function changeFlag() {
            isAnimated = false;
        }

        function wheelListener(e) {
            if(isAnimated) return;
            isAnimated = true;
            setTimeout(changeFlag, ANIM_DURATION);
            if (e.deltaY > 0 ) {
                if (thirdBlock.classList.contains('portfolio-block--showed')) {
                    window.removeEventListener('wheel', wheelListener);
                    body.classList.remove('no-scroll');
                } else {
                    showPortfolio();
                }
            } else {
                if (!secondBlock.classList.contains('portfolio-block--showed')) {
                    window.removeEventListener('wheel', wheelListener);
                    body.classList.remove('no-scroll');
                } else {
                    hidePortfolio();
                }
            }
        }
        
        function showPortfolio () {
            if (!secondBlock.classList.contains('portfolio-block--showed')) {
                secondBlock.classList.add('portfolio-block--showed');
            } else if (!thirdBlock.classList.contains('portfolio-block--showed')) {
                thirdBlock.classList.add('portfolio-block--showed');
            }
        }
        
        function hidePortfolio() {
            if (thirdBlock.classList.contains('portfolio-block--showed')) {
                thirdBlock.classList.remove('portfolio-block--showed');
            } else if (secondBlock.classList.contains('portfolio-block--showed')) {
                secondBlock.classList.remove('portfolio-block--showed');
            }
        }

    }
}

export default portfolio;