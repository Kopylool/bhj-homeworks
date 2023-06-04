const revealElements = document.querySelectorAll('.reveal');

function revealElement() {
  revealElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPosition < windowHeight) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  });
}

document.addEventListener('scroll', revealElement);