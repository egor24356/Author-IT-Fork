function benefits() {

    const benefitsContainer = document.querySelector('.benefits-tabs');
    const readAllBtn = document.querySelector('.read__all');
    const readAllArrow = document.querySelector('.advantages__read__all__arrow');
    const readAllText = readAllBtn.querySelector('.advantages__read__all');

    readAllBtn.addEventListener('click', function() {
        readAllArrow.classList.toggle('arrow__read__all_active');
        if (benefitsContainer.classList.contains('none')) {
            benefitsContainer.classList.remove('none');
            readAllText.innerHTML = "скрыть всё";
            let height = window.getComputedStyle(benefitsContainer).height;
            benefitsContainer.animate([
                {height: 0},
                {height: height}
            ], 100, 'ease');
        } else {
            let height = window.getComputedStyle(benefitsContainer).height;
            readAllText.innerHTML = "читать всё";
            let animation = benefitsContainer.animate([
                {height: height},
                {height: 0}
            ], 100, 'ease');
            animation.addEventListener('finish', function() {
                benefitsContainer.classList.add('none');
            })
        }
    })
}

export default benefits;