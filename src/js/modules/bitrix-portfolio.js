function portfolio() {
    const bitrixBefore = document.querySelector('.before-click');
    if (window.matchMedia('(min-width: 992px)').matches && !bitrixBefore.classList.contains('none')) {
        const ANIM_DURATION = 300;
        const body = document.querySelector('body');
        const firstBlock = document.querySelector('.portfolio-1');
        const secondBlock = document.querySelector('.portfolio-2');
        const thirdBlock = document.querySelector('.portfolio-3');
        const portfolioBlock = document.querySelector('.portfolio');
        
        let isEnded = false;

        let isAnimated = false;

        window.addEventListener('scroll', function(e) {
            if (isAnimated) return;
            let posY = portfolioBlock.getBoundingClientRect().top;
            if (Math.abs(posY) < 20 && !bitrixBefore.classList.contains('none') && (posY > -1 && isEnded || posY < 1 && !isEnded)) {
                    body.classList.add('no-scroll');
                    isAnimated = true;
                    setTimeout(changeFlag, ANIM_DURATION);
                    setTimeout(scrollToSection, ANIM_DURATION);
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
                if (secondBlock.classList.contains('portfolio-block--showed')) {
                    body.classList.remove('no-scroll');
                }
                if (!secondBlock.classList.contains('portfolio-block--showed')) {
                    setTimeout(scrollToSection, ANIM_DURATION);
                    body.classList.add('no-scroll');
                }
                if (thirdBlock.classList.contains('portfolio-block--showed')) {
                    window.removeEventListener('wheel', wheelListener);
                } else {
                    showPortfolio();
                }
            } else {
                if (thirdBlock.classList.contains('portfolio-block--showed')) {
                    setTimeout(scrollToSection, ANIM_DURATION);
                    body.classList.add('no-scroll');
                }
                if (secondBlock.classList.contains('portfolio-block--showed') && !thirdBlock.classList.contains('portfolio-block--showed')) {
                    body.classList.remove('no-scroll');
                }
                if (!secondBlock.classList.contains('portfolio-block--showed')) {
                    body.classList.remove('no-scroll');
                    window.removeEventListener('wheel', wheelListener);
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
                isEnded = true;
            }
        }
        
        function hidePortfolio() {
            if (thirdBlock.classList.contains('portfolio-block--showed')) {
                thirdBlock.classList.remove('portfolio-block--showed');
            } else if (secondBlock.classList.contains('portfolio-block--showed')) {
                secondBlock.classList.remove('portfolio-block--showed');
                isEnded = false;
            }
        }

    }
}

export default portfolio;