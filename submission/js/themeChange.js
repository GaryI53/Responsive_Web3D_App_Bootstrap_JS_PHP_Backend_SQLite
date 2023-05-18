// Get theme buttons
var darkButton = document.getElementById('dark-theme');
var lightButton = document.getElementById('light-theme');
var resetButton = document.getElementById('reset-theme');

// Original theme colors
var originalNavbarColor = 'black';
var originalTextColor = 'white';

// Dark theme colors
var darkNavbarColor = 'black';
var darkTextColor = 'white';

// Light theme colors
var lightNavbarColor = 'white';
var lightTextColor = 'black';

// Get navbar
var navbar = document.querySelector('.navbar-expand-sm, .navbar-dark');

// Get text
var navbarText = document.querySelectorAll('.navbar-text p, .navbar-text span, .navbar-text button, .navbar-text, .logo, .logo p, .logo h1, .logo h2, .logo h3, .nav-item');

// Dark theme button event
darkButton.onclick = function() {
    navbar.style.backgroundColor = darkNavbarColor;
    navbarText.forEach(function(textElement) {
        textElement.style.color = darkTextColor;
    });
}

// Light theme button event
lightButton.onclick = function() {
    navbar.style.backgroundColor = lightNavbarColor;
    navbarText.forEach(function(textElement) {
        textElement.style.color = lightTextColor;
    });
}

// Reset theme button event
resetButton.onclick = function() {
    navbar.style.backgroundColor = originalNavbarColor;
    navbarText.forEach(function(textElement) {
        textElement.style.color = originalTextColor;
    });
}
