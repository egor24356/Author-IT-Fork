function switchCases(filterValueSwiper) {
    const sectionDisplay = document.querySelector('.Cases');
    const sectionAfterDisplay = document.querySelector('.Cases-afterClick');

    const casesWrapperDescr = sectionAfterDisplay.querySelectorAll('.Cases__wrapper-descr');
                
    sectionDisplay.style.display = 'none';
    sectionAfterDisplay.style.display = 'flex';
    
    casesWrapperDescr.forEach((descr) => {
        const filterValueDescr = descr.dataset.filterdescr;
        if (filterValueSwiper === filterValueDescr) {
            descr.classList.remove('none') ;
        } else {
            descr.classList.add('none') ;
        }
    })
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

export default switchCases;