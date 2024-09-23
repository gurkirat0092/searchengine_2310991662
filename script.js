document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchHistoryList = document.getElementById('search-history');
    const clearHistoryButton = document.getElementById('clear-history');

    // Load search history from localStorage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Display search history
    function displaySearchHistory() {
        searchHistoryList.innerHTML = '';
        searchHistory.forEach(term => {
            const li = document.createElement('li');
            li.textContent = term;
            searchHistoryList.appendChild(li);
        });
    }

    // Save search term to history
    function addSearchTerm(term) {
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }

    // Clear search history
    function clearSearchHistory() {
        searchHistory = [];
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }

    // Event listeners
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            addSearchTerm(searchTerm);
            searchInput.value = ''; // Clear input after search
        }
    });

    clearHistoryButton.addEventListener('click', clearSearchHistory);

    // Initial rendering of search history
    displaySearchHistory();
});
