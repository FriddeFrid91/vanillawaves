// script.js
document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
const height = window.innerHeight;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

console.log(`Skärmens storlek är ${screenWidth}px x ${screenHeight}px`);


console.log(`Webbläsarfönstrets storlek är ${width}px x ${height}px`);
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });
});

