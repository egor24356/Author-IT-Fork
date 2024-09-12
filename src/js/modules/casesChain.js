import hideCasesSlider from "./hideCasesSlider";

function casesChain() {
    const chains = document.querySelectorAll('.cases-chain');

    chains.forEach(chain => {
        let chainItems = chain.querySelectorAll('.cases-chain__item');
        chainItems.forEach(chainItem => {
            chainItem.addEventListener('click', function() {
                document.querySelector('.Cases').classList.remove('none');;
                document.querySelector('.Cases-afterClick').classList.add('none');
                let filter = this.dataset.filter;
                hideCasesSlider(filter);
                const filterItems = document.querySelectorAll('.Cases__filter-item');
            
                filterItems.forEach(filterItem => {
                    filterItem.classList.remove('Cases__filter-item--active');
                    if (filterItem.dataset.filter == filter) {
                        filterItem.classList.add('Cases__filter-item--active');
                    }
                });
            });
        });
    });
}

export default casesChain;