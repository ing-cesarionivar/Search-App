import {setSearchFocus} from './searchBar.js';
import {getSearchTerm} from './dataFunctions.js';

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // 3 listeners clear text

    const form = document.getElementById('searchBar');
    form.addEventListener('submit', submitTheSearch);

};

// Procedural "workflow" function 
const submitTheSearch = (event) => {
    event.preventDefault();
    // Delete search results
    
    processTheSearch();

    setSearchFocus();
};

const processTheSearch = async () => {
    // Clear the stats line
    const seachTerm = getSearchTerm();
    if(seachTerm === '') return;
    const resultArray = await retrieveSearchResults(seachTerm);
}