// Function to change content based on page selection
function loadPage(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = `
            <h1>Welcome to the Energy Consumption Website</h1>
            <p>This is a placeholder for home page content related to appliance energy consumption in the Australian market.</p>
        `;
    } else if (page === 'television') {
        content.innerHTML = `
            <h1>Televisions Energy Consumption</h1>
            <p>Placeholder content about televisions' energy consumption in Australia.</p>
        `;
    } else if (page === 'about') {
        content.innerHTML = `
            <h1>About Us</h1>
            <p>This website is created as part of COS30045 Data Visualisation exercises to demonstrate simple interactive web design.</p>
        `;
    }

    // Update active link highlighting
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
    document.getElementById(`${page}-link`).classList.add('active');
}

// Add event listeners for navigation links
document.getElementById('home-link').addEventListener('click', function (e) {
    e.preventDefault();
    loadPage('home');
});

document.getElementById('television-link').addEventListener('click', function (e) {
    e.preventDefault();
    loadPage('television');
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault();
    loadPage('about');
});

// Add click event to logo to return to Home
document.getElementById('logo').addEventListener('click', function () {
    loadPage('home');
});
