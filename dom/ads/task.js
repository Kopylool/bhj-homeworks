const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => {
  const rotatorCases = rotator.querySelectorAll('.rotator__case');
  let activeIndex = 0;
  let timeoutID;

  function changeCase() {
    // Получаем текущий элемент и снимаем у него класс активного элемента
    const currentActive = rotatorCases[activeIndex];
    currentActive.classList.remove('rotator__case_active');

    // Вычисляем индекс следующего элемента
    activeIndex = activeIndex < rotatorCases.length - 1 ? activeIndex + 1 : 0;

    // Получаем следующий элемент и устанавливаем ему класс активного элемента
    const nextActive = rotatorCases[activeIndex];
    nextActive.classList.add('rotator__case_active');

    // Получаем значение атрибута data-color и устанавливаем стиль текста
    const textColor = nextActive.getAttribute('data-color');
    rotator.style.color = textColor;

    // Получаем значение атрибута data-speed и устанавливаем новый интервал
    const rotatorSpeed = nextActive.getAttribute('data-speed');
    clearInterval(timeoutID);
    timeoutID = setInterval(changeCase, rotatorSpeed);
  }

  changeCase();
});