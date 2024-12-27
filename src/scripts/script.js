document.addEventListener('DOMContentLoaded', () => {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            console.log('Header loaded successfully.');
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            console.log('Footer loaded successfully.');
        })
        .catch(error => console.error('Error loading footer:', error));
});