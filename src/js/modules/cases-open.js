import switchCases from "./switch-cases";

function casesOpen() {
    const paramPage = new URL(document.location).searchParams.get('filterDescr');
    if (!paramPage) return;
    switchCases(paramPage);    
}

export default casesOpen;