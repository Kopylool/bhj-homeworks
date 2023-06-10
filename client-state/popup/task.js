const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('div.modal__close');

const getCookie = (pair) => {
    const pairs = document.cookie.split('; ')
    return pairs.includes(pair);
}

if(!getCookie('flag=1')) {
    modal.classList.add('modal_active');
}

close.onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = 'flag=1';
}