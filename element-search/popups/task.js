const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close');
const showSuccessBtn = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

modalClose.forEach(btn => {
  btn.onclick = () => {
    btn.closest('.modal').classList.remove('modal_active');
  }
});

showSuccessBtn.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
};