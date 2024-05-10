document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.dropdown-menu');
  const navLinks = document.querySelectorAll('.dropdown-menu a');

  function toggleMenu() {
    // Toggle the 'aria-expanded' state based on its presence
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.toggleAttribute('hidden');

    // Toggle visibility class for potential CSS animations or transitions
    menu.classList.toggle('is-visible');

    // Manage focus when the menu is opened
    if (menu.classList.contains('is-visible')) {
      menu.querySelectorAll('a')[0].focus();
    } else {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});
