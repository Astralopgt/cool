function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function performSearch() {
    const input = document.getElementById('searchInput').value;
    const modalResults = document.getElementById('modalResults');
    modalResults.innerHTML = '';

    if (input) {
        const result = document.createElement('div');
        result.textContent = `Results for "${input}" are blocked.`;
        modalResults.appendChild(result);
        
        // Show the modal
        document.getElementById('modal').style.display = 'block';
    } else {
        modalResults.innerHTML = 'Please enter a search term.';
        document.getElementById('modal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
