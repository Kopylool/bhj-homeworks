const items = Array.from(document.querySelectorAll('.slider__item'));
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');
let currentIndex = 0;

function changeSlide(index) {
  items[currentIndex].classList.remove('slider__item_active');
  items[index].classList.add('slider__item_active');
  currentIndex = index;
}

prevBtn.addEventListener('click', () => {
  let index = currentIndex - 1;
  if (index < 0) {
    index = items.length - 1;
  }
  changeSlide(index);
});

nextBtn.addEventListener('click', () => {
  let index = currentIndex + 1;
  if (index >= items.length) {
    index = 0;
  }
  changeSlide(index);
});