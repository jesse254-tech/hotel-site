// ===== MOBILE MENU (animated dropdown) =====
// Grab the hamburger button and the menu from the page
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Helper: close the menu and reset the icon back to ☰
function closeMenu() {
  navMenu.classList.remove('open');
  hamburger.textContent = '☰';
}

// 1) Open / close when the hamburger is tapped
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // swap the icon: ☰ when closed, ✕ when open
  hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
});

// 2) Close after tapping any menu link (then it smooth-scrolls to the section)
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// 3) Close when tapping anywhere OUTSIDE the menu or the button
document.addEventListener('click', (e) => {
  const clickedInsideNav = navMenu.contains(e.target) || hamburger.contains(e.target);
  if (navMenu.classList.contains('open') && !clickedInsideNav) {
    closeMenu();
  }
});
