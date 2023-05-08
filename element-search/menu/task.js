const links = document.querySelectorAll('.menu__link');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    const parentMenu = link.closest('.menu');
    
    if (parentMenu) {
      event.preventDefault();
      const subMenu = parentMenu.querySelector('.menu_active');
      if (subMenu && subMenu !== link.nextElementSibling) {
        subMenu.classList.remove('menu_active');
      }
      link.nextElementSibling.classList.toggle('menu_active');
    }
  });
});