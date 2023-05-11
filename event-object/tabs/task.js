const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

// Добавляем обработчики клика на каждую вкладку
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Убираем класс active у всех вкладок и содержимого
    tabs.forEach((tab) => {
      tab.classList.remove('tab_active');
    });
    contents.forEach((content) => {
      content.classList.remove('tab__content_active');
    });
    // Добавляем класс active соответствующей вкладке и содержимому
    tab.classList.add('tab_active');
    contents[index].classList.add('tab__content_active');
  });
});