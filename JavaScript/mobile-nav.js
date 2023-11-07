window.addEventListener("DOMContentLoaded", function() {
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');

    navBtn.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
    };

    
    let startX = 0;
    let startY = 0;

    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    /* document.addEventListener('touchmove', function(e) {
        if (!startX || !startY) {
            return;
        }

        let endX = e.touches[0].clientX;
        let endY = e.touches[0].clientY;

        let diffY = endY - startY;
     
        if (Math.abs(diffY) < Math.abs(endX - startX)) {}
        else {
            if (diffY < 0) {
                if (nav.classList.contains('mobile-nav--open')) {
                    window.scrollTo({top: 0})
                }
                nav.classList.remove('mobile-nav--open');
                menuIcon.classList.remove('nav-icon--active');
                document.body.classList.remove('no-scroll');
            }
        }
        startX = 0;
        startY = 0;
    }); */

})