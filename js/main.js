import {setSearchFocus} from './searchBar.js';
import {getSearchTerm, retrieveSearchResults, setStatsLine} from './dataFunctions.js';
import {deleteSearchResults, buildSearchResults, clearStatsLine} from './searchResults.js';

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // TODO: 3 listeners clear text

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