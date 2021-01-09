import {clearSearchText, setSearchFocus, showClearTextButton, clearPushListener} from './searchBar.js';
import {getSearchTerm, retrieveSearchResults} from './dataFunctions.js';
import {deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine} from './searchResults.js';

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    const search = document.getElementById('search');
    search.addEventListener('input', showClearTextButton);

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearSearchText);
    clear.addEventListener('keydown', clearPushListener);

    const form = document.getElementById('searchBar');
    form.addEventListener('submit', submitTheSearch);

};

// Procedural "workflow" function 
const submitTheSearch = (event) => {
    event.preventDefault();
    deleteSearchResults();
    
    processTheSearch();

    setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
    clearStatsLine();
    const seachTerm = getSearchTerm();
    if(seachTerm === '') return;
    const resultArray = await retrieveSearchResults(seachTerm);
    if(resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);
}