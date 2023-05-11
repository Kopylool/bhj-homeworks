const dropdowns = document.querySelectorAll('.dropdown');

for (let dropdown of dropdowns) {
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const links = dropdown.querySelectorAll('.dropdown__link');
  
  value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });
  
  for (let link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      value.textContent = link.textContent;
      list.classList.remove('dropdown__list_active');
    });
  }
} 
