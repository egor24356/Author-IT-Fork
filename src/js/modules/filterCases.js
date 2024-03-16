// нажатие на фильтры section Cases
import hideCasesSlider from "./hideCasesSlider.js";

function filterCases() {
    document.addEventListener('DOMContentLoaded', ()  => { 
        const filterItems = document.querySelectorAll('.Cases__filter-item');

        filterItems.forEach(filterItem => {
            filterItem.addEventListener('click', (e) => {
                filterItems.forEach(i => {
                    i.classList.remove('Cases__filter-item--active')
                    if (i == e.target) {
                        i.classList.add('Cases__filter-item--active')
                    }
                })
                hideCasesSlider(filterItem.dataset.filter);
            });
        });
    });
}

export default filterCases;