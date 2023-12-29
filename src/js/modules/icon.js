function icon() {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.querySelector('.site-icon').href = '../img/icon1/icon-dark.svg';
    }
}

export default icon;