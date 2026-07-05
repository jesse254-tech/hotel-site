// ===== MOBILE MENU TOGGLE =====
// Grab the hamburger button and the menu from the page
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// When the hamburger is clicked, open or close the menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // swap the icon: ☰ when closed, ✕ when open
  hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
});

// After tapping any menu link, close the menu again (feels natural on phones)
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.textContent = '☰';
  });
});
