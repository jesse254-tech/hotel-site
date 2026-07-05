/* Mobile menu */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

function closeMenu() {
  navMenu.classList.remove('open');
  hamburger.textContent = '☰';
}

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  const clickedInsideNav = navMenu.contains(e.target) || hamburger.contains(e.target);
  if (navMenu.classList.contains('open') && !clickedInsideNav) {
    closeMenu();
  }
});
